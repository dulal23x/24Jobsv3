import logging
from django_q.tasks import async_task, schedule
from django_q.models import Schedule
from datetime import datetime, timedelta

from .services import EmailService
from .models import EmailCampaign, EmailRecipient, EmailSent

logger = logging.getLogger(__name__)

def setup_recurring_tasks():
    """Set up recurring tasks for email processing."""
    # Process emails every 5 minutes
    schedule('email_service.tasks.process_due_emails',
             schedule_type=Schedule.MINUTES,
             minutes=5,
             repeats=-1,
             name='Process due emails')
    
    # Check for email replies every 15 minutes
    schedule('email_service.tasks.check_for_replies',
             schedule_type=Schedule.MINUTES,
             minutes=15,
             repeats=-1,
             name='Check for email replies')

def process_due_emails():
    """Process all emails that are due to be sent."""
    try:
        logger.info("Processing due emails")
        EmailService.process_due_emails()
    except Exception as e:
        logger.error(f"Error processing due emails: {str(e)}")

def send_email(email_id):
    """Send a single email by ID."""
    try:
        email = EmailSent.objects.get(id=email_id)
        logger.info(f"Sending email {email_id} to {email.recipient.email}")
        EmailService.send_campaign_email(email)
    except EmailSent.DoesNotExist:
        logger.error(f"Email {email_id} not found")
    except Exception as e:
        logger.error(f"Error sending email {email_id}: {str(e)}")

def schedule_sequence(recipient_id):
    """Schedule the next sequence for a recipient."""
    try:
        recipient = EmailRecipient.objects.get(id=recipient_id)
        logger.info(f"Scheduling next sequence for recipient {recipient_id}")
        EmailService.schedule_next_sequence(recipient)
    except EmailRecipient.DoesNotExist:
        logger.error(f"Recipient {recipient_id} not found")
    except Exception as e:
        logger.error(f"Error scheduling sequence for recipient {recipient_id}: {str(e)}")

def check_for_replies():
    """Check for email replies for tracking."""
    # This is a placeholder for implementing reply detection
    # In a real implementation, this would access Gmail/Outlook APIs
    # to scan for replies to sent messages
    logger.info("Checking for email replies")
    
    # TODO: Implement reply detection for Gmail
    # TODO: Implement reply detection for Outlook

def retry_failed_emails():
    """Retry sending failed emails."""
    try:
        # Get failed emails from the last 24 hours
        one_day_ago = datetime.now() - timedelta(days=1)
        failed_emails = EmailSent.objects.filter(
            status='failed',
            updated_at__gte=one_day_ago
        )
        
        logger.info(f"Retrying {failed_emails.count()} failed emails")
        
        for email in failed_emails:
            async_task(send_email, email.id)
    
    except Exception as e:
        logger.error(f"Error retrying failed emails: {str(e)}")

def update_campaign_stats(campaign_id):
    """Update campaign statistics."""
    from .models import CampaignStatistics
    
    try:
        campaign = EmailCampaign.objects.get(id=campaign_id)
        
        # Get or create statistics record
        stats, created = CampaignStatistics.objects.get_or_create(campaign=campaign)
        
        # Count email statuses
        emails_sent = EmailSent.objects.filter(campaign=campaign, status__in=['sent', 'opened', 'clicked', 'replied']).count()
        emails_opened = EmailSent.objects.filter(campaign=campaign, status__in=['opened', 'clicked', 'replied']).count()
        emails_clicked = EmailSent.objects.filter(campaign=campaign, status__in=['clicked', 'replied']).count()
        emails_replied = EmailSent.objects.filter(campaign=campaign, status='replied').count()
        emails_bounced = EmailSent.objects.filter(campaign=campaign, status='bounced').count()
        
        # Count recipient statuses
        recipients_completed = EmailRecipient.objects.filter(campaign=campaign, status='completed').count()
        recipients_unsubscribed = EmailRecipient.objects.filter(campaign=campaign, status='unsubscribed').count()
        
        # Update statistics
        stats.emails_sent = emails_sent
        stats.emails_opened = emails_opened
        stats.emails_clicked = emails_clicked
        stats.emails_replied = emails_replied
        stats.emails_bounced = emails_bounced
        stats.recipients_completed = recipients_completed
        stats.recipients_unsubscribed = recipients_unsubscribed
        stats.save()
        
        logger.info(f"Updated statistics for campaign {campaign_id}")
    
    except EmailCampaign.DoesNotExist:
        logger.error(f"Campaign {campaign_id} not found")
    except Exception as e:
        logger.error(f"Error updating statistics for campaign {campaign_id}: {str(e)}") 