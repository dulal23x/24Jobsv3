import csv
from django.core.management.base import BaseCommand
from api.models import Person, Company  # Adjust import based on your app name
import os

class Command(BaseCommand):
    help = 'Import data from CSV into Person and Company models'

    def handle(self, *args, **options):
        csv_file_path = os.path.join(os.getcwd(), 'Demo data of people and company for creating database schemas.csv')  # Path to CSV in workspace root
        
        with open(csv_file_path, 'r') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Create or update Company first, to handle foreign key
                company, created = Company.objects.get_or_create(
                    company_name=row.get('Company Name'),
                    defaults={
                        'industry': row.get('Company Industry'),
                        'website': row.get('Company Website'),
                        'size': row.get('Company Size'),
                        'founded': row.get('Company Founded'),
                        'location_name': row.get('Company Location Name'),
                        'location_country': row.get('Company Location Country'),
                        # Add other fields as needed
                    }
                )
                
                Person.objects.create(
                    full_name=row.get('Full name'),
                    first_name=row.get('First Name'),
                    last_name=row.get('Last Name'),
                    job_title=row.get('Job title'),
                    industry=row.get('Industry'),
                    emails=row.get('Emails'),
                    mobile=row.get('Mobile'),
                    phone_numbers=row.get('Phone numbers'),
                    location=row.get('Location'),
                    skills=row.get('Skills'),
                    linkedin_url=row.get('LinkedIn Url'),
                    company=company,  # Link to the created Company
                    company_name_raw=row.get('Company Name'),
                    # Add other fields as needed
                )
        self.stdout.write(self.style.SUCCESS('Data imported successfully')) 