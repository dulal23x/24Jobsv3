from django.db import models
from django.contrib.auth.models import User

class EmailProvider(models.Model):
    """Email provider connection for a user."""
    
    PROVIDER_CHOICES = [
        ('gmail', 'Google Gmail'),
        ('outlook', 'Microsoft Outlook'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='email_providers')
    provider = models.CharField(max_length=20, choices=PROVIDER_CHOICES)
    email = models.EmailField()
    refresh_token = models.TextField()
    access_token = models.TextField(blank=True, null=True)
    token_expiry = models.DateTimeField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ('user', 'email')
    
    def __str__(self):
        return f"{self.email} ({self.provider})"


class EmailCampaign(models.Model):
    """Email campaign for a user."""
    
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('active', 'Active'),
        ('paused', 'Paused'),
        ('completed', 'Completed'),
        ('stopped', 'Stopped'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='email_campaigns')
    email_provider = models.ForeignKey(EmailProvider, on_delete=models.SET_NULL, null=True, related_name='campaigns')
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name


class EmailSequence(models.Model):
    """Email sequence within a campaign."""
    
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('paused', 'Paused'),
        ('stopped', 'Stopped'),
    ]
    
    campaign = models.ForeignKey(EmailCampaign, on_delete=models.CASCADE, related_name='sequences')
    order = models.PositiveIntegerField()
    subject = models.CharField(max_length=255)
    body = models.TextField()
    delay_days = models.PositiveIntegerField(default=1)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
        unique_together = ('campaign', 'order')
    
    def __str__(self):
        return f"{self.campaign.name} - Sequence {self.order}: {self.subject}"


class EmailRecipient(models.Model):
    """Recipient for an email campaign."""
    
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('paused', 'Paused'),
        ('completed', 'Completed'),
        ('unsubscribed', 'Unsubscribed'),
        ('bounced', 'Bounced'),
    ]
    
    campaign = models.ForeignKey(EmailCampaign, on_delete=models.CASCADE, related_name='recipients')
    email = models.EmailField()
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    company = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    current_sequence = models.PositiveIntegerField(default=0)
    last_contacted_at = models.DateTimeField(blank=True, null=True)
    last_response_at = models.DateTimeField(blank=True, null=True)
    next_contact_date = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ('campaign', 'email')
    
    def __str__(self):
        return f"{self.email} ({self.campaign.name})"


class EmailSent(models.Model):
    """Record of an email sent within a campaign."""
    
    STATUS_CHOICES = [
        ('scheduled', 'Scheduled'),
        ('sending', 'Sending'),
        ('sent', 'Sent'),
        ('failed', 'Failed'),
        ('opened', 'Opened'),
        ('clicked', 'Clicked'),
        ('replied', 'Replied'),
        ('bounced', 'Bounced'),
    ]
    
    campaign = models.ForeignKey(EmailCampaign, on_delete=models.CASCADE, related_name='emails_sent')
    sequence = models.ForeignKey(EmailSequence, on_delete=models.SET_NULL, null=True, related_name='emails_sent')
    recipient = models.ForeignKey(EmailRecipient, on_delete=models.CASCADE, related_name='emails_received')
    subject = models.CharField(max_length=255)
    body = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='scheduled')
    scheduled_at = models.DateTimeField()
    sent_at = models.DateTimeField(blank=True, null=True)
    opened_at = models.DateTimeField(blank=True, null=True)
    clicked_at = models.DateTimeField(blank=True, null=True)
    replied_at = models.DateTimeField(blank=True, null=True)
    tracking_id = models.UUIDField(unique=True)
    message_id = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Email to {self.recipient.email} - {self.subject} ({self.status})"


class EmailVariable(models.Model):
    """Custom variables for personalization in email campaigns."""
    
    campaign = models.ForeignKey(EmailCampaign, on_delete=models.CASCADE, related_name='variables')
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('campaign', 'name')
    
    def __str__(self):
        return f"{self.name} ({self.campaign.name})"


class EmailRecipientVariable(models.Model):
    """Variable values for specific recipients."""
    
    recipient = models.ForeignKey(EmailRecipient, on_delete=models.CASCADE, related_name='variables')
    variable = models.ForeignKey(EmailVariable, on_delete=models.CASCADE, related_name='values')
    value = models.TextField()
    
    class Meta:
        unique_together = ('recipient', 'variable')
    
    def __str__(self):
        return f"{self.recipient.email} - {self.variable.name}: {self.value}"


class CampaignStatistics(models.Model):
    """Statistics for email campaigns."""
    
    campaign = models.OneToOneField(EmailCampaign, on_delete=models.CASCADE, related_name='statistics')
    emails_sent = models.PositiveIntegerField(default=0)
    emails_opened = models.PositiveIntegerField(default=0)
    emails_clicked = models.PositiveIntegerField(default=0)
    emails_replied = models.PositiveIntegerField(default=0)
    emails_bounced = models.PositiveIntegerField(default=0)
    recipients_completed = models.PositiveIntegerField(default=0)
    recipients_unsubscribed = models.PositiveIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Stats for {self.campaign.name}" 