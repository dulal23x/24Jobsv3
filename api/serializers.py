from rest_framework import serializers
from .models import Company, Person, Job

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

# Special serializer for Person response format
class PersonResponseSerializer(serializers.ModelSerializer):
    company = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()
    phone = serializers.SerializerMethodField()

    class Meta:
        model = Person
        fields = [
            'id', 'first_name', 'last_name', 'title',
            'company', 'city', 'state', 'country',
            'email', 'phone', 'is_unlocked', 'connect_status'
        ]

    def get_company(self, obj):
        if obj.company:
            return {'id': obj.company.id, 'name': obj.company.name}
        elif obj.company_name:
            return {'id': None, 'name': obj.company_name}
        return None

    def _mask_email(self, email):
        if not email or '@' not in email:
            return None
        local_part, domain = email.split('@', 1)
        return f"@{domain}"

    def _mask_phone(self, phone):
        if not phone or len(phone) <= 4:
            return phone
        return phone[:-4] + 'XXXX'

    def get_email(self, obj):
        if obj.is_unlocked:
            return obj.email
        return self._mask_email(obj.email)

    def get_phone(self, obj):
        if obj.is_unlocked:
            return obj.phone
        return self._mask_phone(obj.phone)

# Serializers for custom actions
class ContactUnlockSerializer(serializers.Serializer):
    personId = serializers.IntegerField()

class ConnectionRequestSerializer(serializers.Serializer):
    personId = serializers.IntegerField()

class JobSerializer(serializers.ModelSerializer):
    company = serializers.StringRelatedField()  # Show company name
    class Meta:
        model = Job
        fields = '__all__' 