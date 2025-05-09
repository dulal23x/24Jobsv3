import base64
import uuid
import html
import re
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional

from django.conf import settings
from django.utils import timezone
from django.template import Template, Context

from .models import (
    EmailCampaign, 
    EmailSequence, 
    EmailRecipient, 
    EmailSent,
    EmailVariable,
    EmailRecipientVariable,
    CampaignStatistics
)
from .oauth import GoogleOAuth, MicrosoftOAuth, get_valid_access_token

class EmailService:
    """Service for sending emails via Gmail and Microsoft APIs."""
    
    @staticmethod
    def render_template(template_str: str, context: Dict[str, Any]) -> str:
        """Render a template string with the given context."""
        template = Template(template_str)
        rendered = template.render(Context(context))
        return rendered
    
    @staticmethod
    def get_recipient_variables(recipient: EmailRecipient) -> Dict[str, str]:
        """Get all variables for a recipient as a dictionary."""
        # Start with standard variables
        variables = {
            'first_name': recipient.first_name or '',
            'last_name': recipient.last_name or '',
            'full_name': f"{recipient.first_name or ''} {recipient.last_name or ''}".strip(),
            'email': recipient.email,
            'company': recipient.company or '',
            'title': recipient.title or '',
        }
        
        # Add custom variables
        custom_vars = EmailRecipientVariable.objects.filter(recipient=recipient)
        for var in custom_vars:
            variables[var.variable.name] = var.value
        
        return variables
    
    @staticmethod
    def prepare_email_content(
        sequence: EmailSequence, 
        recipient: EmailRecipient
    ) -> Dict[str, str]:
        """Prepare email content with variables replaced."""
        variables = EmailService.get_recipient_variables(recipient)
        
        # Render subject and body
        subject = EmailService.render_template(sequence.subject, variables)
        body_html = EmailService.render_template(sequence.body, variables)
        
        # Convert HTML to plain text (simplified)
        body_text = html.unescape(re.sub(r'<[^>]*>', '', body_html))
        
        return {
            'subject': subject,
            'body_html': body_html,
            'body_text': body_text
        }
    
    @staticmethod
    def create_tracking_pixel(tracking_id: str) -> str:
        """Create a tracking pixel for email opens."""
        tracking_url = f"{settings.BASE_URL}/email-service/track/open/{tracking_id}/"
        return f'<img src="{tracking_url}" width="1" height="1" alt="" />'
    
    @staticmethod
    def add_tracking_links(body_html: str, tracking_id: str) -> str:
        """Add tracking to all links in the email."""
        tracking_base = f"{settings.BASE_URL}/email-service/track/click/{tracking_id}/"
        
        def replace_link(match):
            href = match.group(1)
            encoded_href = base64.urlsafe_b64encode(href.encode()).decode()
            tracking_url = f"{tracking_base}{encoded_href}/"
            return f'href="{tracking_url}"'
        
        return re.sub(r'href="([^"]+)"', replace_link, body_html)
    
    @staticmethod
    def add_unsubscribe_link(body_html: str, recipient_id: str) -> str:
        """Add unsubscribe link to the email."""
        unsubscribe_url = f"{settings.BASE_URL}/email-service/unsubscribe/{recipient_id}/"
        unsubscribe_html = f'<p style="font-size: 12px; color: #666; margin-top: 20px; text-align: center;">' \
                          f'<a href="{unsubscribe_url}">Unsubscribe</a> from these emails.</p>'
        
        # Add before closing body tag
        if '</body>' in body_html:
            return body_html.replace('</body>', f'{unsubscribe_html}</body>')
        else:
            return f'{body_html}{unsubscribe_html}'
    
    @staticmethod
    def prepare_mime_message(
        sender: str,
        recipient: str,
        subject: str,
        body_html: str,
        body_text: str
    ) -> MIMEMultipart:
        """Prepare a MIME message for sending."""
        message = MIMEMultipart('alternative')
        message['Subject'] = subject
        message['From'] = sender
        message['To'] = recipient
        
        # Attach text and HTML versions
        part1 = MIMEText(body_text, 'plain')
        part2 = MIMEText(body_html, 'html')
        
        message.attach(part1)
        message.attach(part2)
        
        return message
    
    @staticmethod
    def send_email_gmail(
        email_provider,
        recipient_email: str,
        subject: str,
        body_html: str,
        body_text: str
    ) -> str:
        """Send an email using Gmail API."""
        try:
            # Get a valid access token
            access_token = get_valid_access_token(email_provider)
            
            # Create Gmail service
            gmail_service = GoogleOAuth.get_gmail_service(access_token)
            
            # Prepare the message
            message = EmailService.prepare_mime_message(
                email_provider.email,
                recipient_email,
                subject,
                body_html,
                body_text
            )
            
            # Encode the message
            raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
            
            # Send the message
            sent_message = gmail_service.users().messages().send(
                userId='me',
                body={'raw': raw_message}
            ).execute()
            
            return sent_message['id']
        
        except Exception as e:
            raise ValueError(f"Failed to send email via Gmail: {str(e)}")
    
    @staticmethod
    def send_email_outlook(
        email_provider,
        recipient_email: str,
        subject: str,
        body_html: str,
        body_text: str
    ) -> str:
        """Send an email using Microsoft Graph API."""
        try:
            # Get a valid access token
            access_token = get_valid_access_token(email_provider)
            
            # TODO: Implement Microsoft Graph API email sending
            # This is a placeholder and would need to be implemented with the 
            # Microsoft Graph client library
            
            # For now, just return a dummy message ID
            return f"outlook-{uuid.uuid4()}"
        
        except Exception as e:
            raise ValueError(f"Failed to send email via Outlook: {str(e)}")
    
    @staticmethod
    def send_campaign_email(email_sent: EmailSent) -> bool:
        """Send an email for a campaign sequence."""
        try:
            # Get related objects
            campaign = email_sent.campaign
            recipient = email_sent.recipient
            
            # Skip if campaign or recipient status is not active
            if campaign.status != 'active' or recipient.status != 'active':
                return False
            
            # Get email provider
            email_provider = campaign.email_provider
            if not email_provider or not email_provider.is_active:
                raise ValueError(f"No active email provider for campaign: {campaign.name}")
            
            # Update email status to sending
            email_sent.status = 'sending'
            email_sent.save()
            
            # Add tracking pixel
            body_html_with_tracking = f"{email_sent.body}<br/>{EmailService.create_tracking_pixel(str(email_sent.tracking_id))}"
            
            # Add tracking to links
            body_html_with_tracking = EmailService.add_tracking_links(body_html_with_tracking, str(email_sent.tracking_id))
            
            # Add unsubscribe link
            body_html_with_tracking = EmailService.add_unsubscribe_link(body_html_with_tracking, str(recipient.id))
            
            # Convert HTML to plain text (simplified)
            body_text = html.unescape(re.sub(r'<[^>]*>', '', email_sent.body))
            
            # Send the email based on provider type
            if email_provider.provider == 'gmail':
                message_id = EmailService.send_email_gmail(
                    email_provider,
                    recipient.email,
                    email_sent.subject,
                    body_html_with_tracking,
                    body_text
                )
            elif email_provider.provider == 'outlook':
                message_id = EmailService.send_email_outlook(
                    email_provider,
                    recipient.email,
                    email_sent.subject,
                    body_html_with_tracking,
                    body_text
                )
            else:
                raise ValueError(f"Unsupported provider: {email_provider.provider}")
            
            # Update email status to sent
            now = timezone.now()
            email_sent.status = 'sent'
            email_sent.sent_at = now
            email_sent.message_id = message_id
            email_sent.save()
            
            # Update recipient
            recipient.last_contacted_at = now
            recipient.save()
            
            # Update campaign statistics
            stats, _ = CampaignStatistics.objects.get_or_create(campaign=campaign)
            stats.emails_sent += 1
            stats.save()
            
            return True
        
        except Exception as e:
            # Update email status to failed
            email_sent.status = 'failed'
            email_sent.save()
            
            # Log the error
            print(f"Failed to send email: {str(e)}")
            
            return False
    
    @staticmethod
    def schedule_next_sequence(recipient: EmailRecipient) -> Optional[EmailSent]:
        """Schedule the next email sequence for a recipient."""
        try:
            # Get the campaign
            campaign = recipient.campaign
            
            # Skip if campaign or recipient status is not active
            if campaign.status != 'active' or recipient.status != 'active':
                return None
            
            # Get the next sequence
            next_sequence_order = recipient.current_sequence + 1
            try:
                next_sequence = EmailSequence.objects.get(
                    campaign=campaign,
                    order=next_sequence_order,
                    status='active'
                )
            except EmailSequence.DoesNotExist:
                # No more sequences, mark recipient as completed
                recipient.status = 'completed'
                recipient.save()
                
                # Update campaign statistics
                stats, _ = CampaignStatistics.objects.get_or_create(campaign=campaign)
                stats.recipients_completed += 1
                stats.save()
                
                return None
            
            # Prepare email content
            content = EmailService.prepare_email_content(next_sequence, recipient)
            
            # Calculate scheduled time
            scheduled_at = timezone.now() + timedelta(days=next_sequence.delay_days)
            
            # Create email record
            email_sent = EmailSent.objects.create(
                campaign=campaign,
                sequence=next_sequence,
                recipient=recipient,
                subject=content['subject'],
                body=content['body_html'],
                status='scheduled',
                scheduled_at=scheduled_at,
                tracking_id=uuid.uuid4()
            )
            
            # Update recipient
            recipient.current_sequence = next_sequence_order
            recipient.next_contact_date = scheduled_at
            recipient.save()
            
            return email_sent
        
        except Exception as e:
            # Log the error
            print(f"Failed to schedule next sequence: {str(e)}")
            
            return None
    
    @staticmethod
    def process_due_emails():
        """Process all emails that are due to be sent."""
        now = timezone.now()
        
        # Get all emails scheduled for now or earlier
        due_emails = EmailSent.objects.filter(
            status='scheduled',
            scheduled_at__lte=now
        ).select_related('campaign', 'recipient', 'sequence')
        
        for email in due_emails:
            # Send the email
            success = EmailService.send_campaign_email(email)
            
            if success:
                # Schedule the next sequence if this one was successful
                EmailService.schedule_next_sequence(email.recipient)
    
    @staticmethod
    def track_email_open(tracking_id: str) -> bool:
        """Track an email open event."""
        try:
            email = EmailSent.objects.get(tracking_id=tracking_id)
            
            # Update email status if not already opened
            if email.status not in ['opened', 'clicked', 'replied']:
                email.status = 'opened'
                email.opened_at = timezone.now()
                email.save()
                
                # Update campaign statistics
                stats, _ = CampaignStatistics.objects.get_or_create(campaign=email.campaign)
                stats.emails_opened += 1
                stats.save()
            
            return True
        
        except EmailSent.DoesNotExist:
            return False
    
    @staticmethod
    def track_email_click(tracking_id: str) -> bool:
        """Track an email click event."""
        try:
            email = EmailSent.objects.get(tracking_id=tracking_id)
            
            # Update email status if not already clicked or replied
            if email.status not in ['clicked', 'replied']:
                email.status = 'clicked'
                email.clicked_at = timezone.now()
                email.save()
                
                # Update campaign statistics
                stats, _ = CampaignStatistics.objects.get_or_create(campaign=email.campaign)
                if email.status != 'opened':
                    stats.emails_opened += 1
                stats.emails_clicked += 1
                stats.save()
            
            return True
        
        except EmailSent.DoesNotExist:
            return False
    
    @staticmethod
    def process_unsubscribe(recipient_id: str) -> bool:
        """Process an unsubscribe request."""
        try:
            recipient = EmailRecipient.objects.get(id=recipient_id)
            
            # Update recipient status
            recipient.status = 'unsubscribed'
            recipient.save()
            
            # Update campaign statistics
            stats, _ = CampaignStatistics.objects.get_or_create(campaign=recipient.campaign)
            stats.recipients_unsubscribed += 1
            stats.save()
            
            return True
        
        except EmailRecipient.DoesNotExist:
            return False 