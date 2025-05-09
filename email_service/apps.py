from django.apps import AppConfig


class EmailServiceConfig(AppConfig):
    name = 'email_service'
    verbose_name = 'Email Campaign Service'
    
    def ready(self):
        """
        Initialize the app when Django starts.
        This is a good place to set up signal handlers and background tasks.
        """
        # Import at runtime to avoid circular imports
        try:
            from .tasks import setup_recurring_tasks
            setup_recurring_tasks()
        except Exception as e:
            # Log but don't fail if tasks setup fails (might not be in prod/might not have django_q)
            print(f"Failed to setup email service recurring tasks: {str(e)}") 