from django.db import models

# Create your models here.

class Company(models.Model):
    company_name = models.CharField(max_length=255, unique=True, db_index=True)  # "Company Name"
    industry = models.CharField(max_length=255, null=True, blank=True)  # "Company Industry"
    website = models.URLField(max_length=500, null=True, blank=True)  # "Company Website"
    size = models.CharField(max_length=100, null=True, blank=True)  # "Company Size"
    founded = models.IntegerField(null=True, blank=True)  # "Company Founded"
    location_name = models.CharField(max_length=255, null=True, blank=True)  # "Company Location Name"
    location_country = models.CharField(max_length=100, null=True, blank=True)  # "Company Location Country"
    # Add other company fields as needed
    def __str__(self):
        return self.company_name

class Person(models.Model):
    full_name = models.CharField(max_length=255)  # "Full name"
    first_name = models.CharField(max_length=100, null=True, blank=True)  # "First Name"
    last_name = models.CharField(max_length=150, null=True, blank=True)  # "Last Name"
    job_title = models.CharField(max_length=255, null=True, blank=True)  # "Job title"
    industry = models.CharField(max_length=255, null=True, blank=True)  # "Industry"
    emails = models.TextField(null=True, blank=True)  # "Emails"
    mobile = models.CharField(max_length=100, null=True, blank=True)  # "Mobile"
    phone_numbers = models.TextField(null=True, blank=True)  # "Phone numbers"
    location = models.CharField(max_length=255, null=True, blank=True)  # "Location"
    skills = models.TextField(null=True, blank=True)  # "Skills"
    linkedin_url = models.URLField(max_length=500, null=True, blank=True)  # "LinkedIn Url"
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, blank=True, related_name='employees')  # Link to Company
    company_name_raw = models.CharField(max_length=255, null=True, blank=True)  # "Company Name"
    def __str__(self):
        return self.full_name

class Job(models.Model):
    title = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='jobs')
    location = models.CharField(max_length=255)
    type = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    days_posted = models.IntegerField(default=0)
    experience_level = models.CharField(max_length=100)
    job_type = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.title} at {self.company.name}"
