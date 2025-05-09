import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myapp.settings')
django.setup()

from api.models import Company, Person, Job

# Add test companies
companies = [
    {
        'name': 'Google',
        'industry': 'Technology',
        'website': 'https://google.com',
        'location': 'Mountain View, CA'
    },
    {
        'name': 'Microsoft',
        'industry': 'Technology',
        'website': 'https://microsoft.com',
        'location': 'Redmond, WA'
    },
    {
        'name': 'Amazon',
        'industry': 'E-commerce, Cloud Computing',
        'website': 'https://amazon.com',
        'location': 'Seattle, WA'
    },
    {
        'name': 'Facebook',
        'industry': 'Social Media',
        'website': 'https://facebook.com',
        'location': 'Menlo Park, CA'
    },
    {
        'name': 'Apple',
        'industry': 'Technology',
        'website': 'https://apple.com',
        'location': 'Cupertino, CA'
    }
]

# Create companies
created_companies = {}
for company_data in companies:
    company, created = Company.objects.get_or_create(**company_data)
    created_companies[company.name] = company
    print(f"{'Created' if created else 'Found'} company: {company.name}")

# Add test people
people = [
    {
        'first_name': 'John',
        'last_name': 'Doe',
        'title': 'Software Engineer',
        'company': created_companies['Google'],
        'city': 'San Francisco',
        'state': 'CA',
        'country': 'USA',
        'email': 'john.doe@gmail.com',
        'phone': '+1 (555) 123-4567',
    },
    {
        'first_name': 'Jane',
        'last_name': 'Smith',
        'title': 'Product Manager',
        'company': created_companies['Microsoft'],
        'city': 'Seattle',
        'state': 'WA',
        'country': 'USA',
        'email': 'jane.smith@outlook.com',
        'phone': '+1 (555) 987-6543',
    },
    {
        'first_name': 'Michael',
        'last_name': 'Johnson',
        'title': 'Data Scientist',
        'company': created_companies['Amazon'],
        'city': 'Chicago',
        'state': 'IL',
        'country': 'USA',
        'email': 'michael.johnson@yahoo.com',
        'phone': '+1 (555) 456-7890',
    },
    {
        'first_name': 'Emily',
        'last_name': 'Brown',
        'title': 'UX Designer',
        'company': created_companies['Apple'],
        'city': 'New York',
        'state': 'NY',
        'country': 'USA',
        'email': 'emily.brown@icloud.com',
        'phone': '+1 (555) 789-0123',
    },
    {
        'first_name': 'David',
        'last_name': 'Wilson',
        'title': 'Marketing Director',
        'company': created_companies['Facebook'],
        'city': 'Los Angeles',
        'state': 'CA',
        'country': 'USA',
        'email': 'david.wilson@hotmail.com',
        'phone': '+1 (555) 321-6540',
    },
    {
        'first_name': 'Sarah',
        'last_name': 'Taylor',
        'title': 'Frontend Developer',
        'company_name': 'Freelancer',
        'city': 'Austin',
        'state': 'TX',
        'country': 'USA',
        'email': 'sarah.taylor@gmail.com',
        'phone': '+1 (555) 654-0987',
    },
    {
        'first_name': 'Robert',
        'last_name': 'Martinez',
        'title': 'Backend Engineer',
        'company': created_companies['Google'],
        'city': 'Boston',
        'state': 'MA',
        'country': 'USA',
        'email': 'robert.martinez@gmail.com',
        'phone': '+1 (555) 234-5678',
    },
    {
        'first_name': 'Jessica',
        'last_name': 'Anderson',
        'title': 'HR Manager',
        'company': created_companies['Microsoft'],
        'city': 'Denver',
        'state': 'CO',
        'country': 'USA',
        'email': 'jessica.anderson@outlook.com',
        'phone': '+1 (555) 876-5432',
    },
    {
        'first_name': 'Thomas',
        'last_name': 'Jackson',
        'title': 'DevOps Engineer',
        'company': created_companies['Amazon'],
        'city': 'Portland',
        'state': 'OR',
        'country': 'USA',
        'email': 'thomas.jackson@yahoo.com',
        'phone': '+1 (555) 345-6789',
    },
    {
        'first_name': 'Jennifer',
        'last_name': 'White',
        'title': 'CEO',
        'company': created_companies['Apple'],
        'city': 'San Jose',
        'state': 'CA',
        'country': 'USA',
        'email': 'jennifer.white@icloud.com',
        'phone': '+1 (555) 678-9012',
    }
]

# Create people
for person_data in people:
    person, created = Person.objects.get_or_create(**person_data)
    print(f"{'Created' if created else 'Found'} person: {person.first_name} {person.last_name}")

# Add test jobs
jobs = [
    {
        'title': 'Frontend Developer',
        'company': created_companies['Google'],
        'location': 'Remote',
        'type': 'Remote',
        'salary': '$120,000+',
        'days_posted': 2,
        'experience_level': '2+ years',
        'job_type': 'Full-time',
        'description': 'Work on modern web apps using React and TypeScript.'
    },
    {
        'title': 'Backend Engineer',
        'company': created_companies['Amazon'],
        'location': 'Seattle, WA',
        'type': 'On-site',
        'salary': '$140,000+',
        'days_posted': 5,
        'experience_level': '3+ years',
        'job_type': 'Full-time',
        'description': 'Build scalable backend systems with Python and AWS.'
    },
    {
        'title': 'Product Manager',
        'company': created_companies['Microsoft'],
        'location': 'Redmond, WA',
        'type': 'Hybrid',
        'salary': '$130,000+',
        'days_posted': 1,
        'experience_level': '5+ years',
        'job_type': 'Full-time',
        'description': 'Lead product teams to deliver innovative software products.'
    },
    {
        'title': 'UX Designer',
        'company': created_companies['Apple'],
        'location': 'Cupertino, CA',
        'type': 'On-site',
        'salary': '$110,000+',
        'days_posted': 3,
        'experience_level': '2+ years',
        'job_type': 'Full-time',
        'description': 'Design user experiences for next-gen Apple products.'
    },
    {
        'title': 'Cloud Solutions Architect',
        'company': created_companies['Amazon'],
        'location': 'Remote',
        'type': 'Remote',
        'salary': '$160,000+',
        'days_posted': 7,
        'experience_level': '5+ years',
        'job_type': 'Full-time',
        'description': 'Architect cloud solutions for enterprise clients.'
    }
]

for job_data in jobs:
    job, created = Job.objects.get_or_create(**job_data)
    print(f"{'Created' if created else 'Found'} job: {job.title} at {job.company.name}")

print("Test data creation completed!") 