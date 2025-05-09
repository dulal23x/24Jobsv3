from rest_framework import serializers
from .models import (
    EmailProvider, 
    EmailCampaign, 
    EmailSequence, 
    EmailRecipient, 
    EmailSent,
    EmailVariable,
    EmailRecipientVariable,
    CampaignStatistics
)

class EmailProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailProvider
        fields = ['id', 'provider', 'email', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class EmailSequenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSequence
        fields = ['id', 'order', 'subject', 'body', 'delay_days', 'status', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class EmailRecipientVariableSerializer(serializers.ModelSerializer):
    variable_name = serializers.CharField(source='variable.name', read_only=True)
    
    class Meta:
        model = EmailRecipientVariable
        fields = ['id', 'variable', 'variable_name', 'value']


class EmailRecipientSerializer(serializers.ModelSerializer):
    variables = EmailRecipientVariableSerializer(many=True, read_only=True)
    
    class Meta:
        model = EmailRecipient
        fields = [
            'id', 'email', 'first_name', 'last_name', 'company', 'title',
            'status', 'current_sequence', 'last_contacted_at', 'last_response_at',
            'next_contact_date', 'created_at', 'updated_at', 'variables'
        ]
        read_only_fields = ['created_at', 'updated_at', 'last_contacted_at', 'last_response_at']


class EmailVariableSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailVariable
        fields = ['id', 'name', 'description', 'created_at']
        read_only_fields = ['created_at']


class CampaignStatisticsSerializer(serializers.ModelSerializer):
    open_rate = serializers.SerializerMethodField()
    click_rate = serializers.SerializerMethodField()
    reply_rate = serializers.SerializerMethodField()
    
    class Meta:
        model = CampaignStatistics
        fields = [
            'emails_sent', 'emails_opened', 'emails_clicked', 'emails_replied',
            'emails_bounced', 'recipients_completed', 'recipients_unsubscribed',
            'open_rate', 'click_rate', 'reply_rate', 'updated_at'
        ]
        read_only_fields = ['__all__']
    
    def get_open_rate(self, obj):
        if obj.emails_sent == 0:
            return 0
        return round((obj.emails_opened / obj.emails_sent) * 100, 2)
    
    def get_click_rate(self, obj):
        if obj.emails_sent == 0:
            return 0
        return round((obj.emails_clicked / obj.emails_sent) * 100, 2)
    
    def get_reply_rate(self, obj):
        if obj.emails_sent == 0:
            return 0
        return round((obj.emails_replied / obj.emails_sent) * 100, 2)


class EmailSentSerializer(serializers.ModelSerializer):
    recipient_email = serializers.CharField(source='recipient.email', read_only=True)
    
    class Meta:
        model = EmailSent
        fields = [
            'id', 'sequence', 'recipient', 'recipient_email', 'subject', 'status',
            'scheduled_at', 'sent_at', 'opened_at', 'clicked_at', 'replied_at',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at', 'sent_at', 'opened_at', 'clicked_at', 'replied_at']


class EmailCampaignListSerializer(serializers.ModelSerializer):
    statistics = CampaignStatisticsSerializer(read_only=True)
    sequence_count = serializers.IntegerField(source='sequences.count', read_only=True)
    recipient_count = serializers.IntegerField(source='recipients.count', read_only=True)
    
    class Meta:
        model = EmailCampaign
        fields = [
            'id', 'name', 'description', 'status', 'created_at', 'updated_at',
            'statistics', 'sequence_count', 'recipient_count'
        ]
        read_only_fields = ['created_at', 'updated_at', 'statistics', 'sequence_count', 'recipient_count']


class EmailCampaignDetailSerializer(serializers.ModelSerializer):
    email_provider = EmailProviderSerializer(read_only=True)
    email_provider_id = serializers.PrimaryKeyRelatedField(
        source='email_provider', 
        queryset=EmailProvider.objects.all(),
        write_only=True
    )
    sequences = EmailSequenceSerializer(many=True, read_only=True)
    statistics = CampaignStatisticsSerializer(read_only=True)
    variables = EmailVariableSerializer(many=True, read_only=True)
    
    class Meta:
        model = EmailCampaign
        fields = [
            'id', 'name', 'description', 'status', 'created_at', 'updated_at',
            'email_provider', 'email_provider_id', 'sequences', 'statistics', 'variables'
        ]
        read_only_fields = ['created_at', 'updated_at', 'sequences', 'statistics', 'variables']
    
    def create(self, validated_data):
        email_provider = validated_data.pop('email_provider')
        campaign = EmailCampaign.objects.create(email_provider=email_provider, **validated_data)
        
        # Create default statistics for the campaign
        CampaignStatistics.objects.create(campaign=campaign)
        
        return campaign 