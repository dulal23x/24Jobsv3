import os
import time
import json
from datetime import datetime, timedelta
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow as GoogleFlow
from googleapiclient.discovery import build
from msal import ConfidentialClientApplication
from django.conf import settings
from django.urls import reverse
from .models import EmailProvider

# Google OAuth settings
GOOGLE_CLIENT_CONFIG = {
    "web": {
        "client_id": os.environ.get("GOOGLE_CLIENT_ID", ""),
        "client_secret": os.environ.get("GOOGLE_CLIENT_SECRET", ""),
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "redirect_uris": [],  # Will be set dynamically
        "javascript_origins": []  # Will be set dynamically
    }
}

# Microsoft OAuth settings
MICROSOFT_CLIENT_ID = os.environ.get("MICROSOFT_CLIENT_ID", "")
MICROSOFT_CLIENT_SECRET = os.environ.get("MICROSOFT_CLIENT_SECRET", "")
MICROSOFT_AUTHORITY = "https://login.microsoftonline.com/common"

# Email scopes
GOOGLE_SCOPES = [
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/gmail.readonly'
]

MICROSOFT_SCOPES = [
    'Mail.Send',
    'Mail.ReadBasic'
]

class GoogleOAuth:
    @staticmethod
    def get_auth_url(request, state=None):
        """Generate the Google OAuth authorization URL."""
        redirect_uri = request.build_absolute_uri(
            reverse('email_service:google-oauth-callback')
        )
        
        # Update the client config with correct redirect URI
        client_config = GOOGLE_CLIENT_CONFIG.copy()
        client_config['web']['redirect_uris'] = [redirect_uri]
        
        # Create the flow
        flow = GoogleFlow.from_client_config(
            client_config,
            scopes=GOOGLE_SCOPES,
            redirect_uri=redirect_uri
        )
        
        # Generate the authorization URL
        auth_url, state = flow.authorization_url(
            access_type='offline',
            include_granted_scopes='true',
            prompt='consent',
            state=state
        )
        
        return auth_url, state
    
    @staticmethod
    def get_token_from_code(request, code):
        """Exchange authorization code for tokens."""
        redirect_uri = request.build_absolute_uri(
            reverse('email_service:google-oauth-callback')
        )
        
        # Update the client config with correct redirect URI
        client_config = GOOGLE_CLIENT_CONFIG.copy()
        client_config['web']['redirect_uris'] = [redirect_uri]
        
        # Create the flow
        flow = GoogleFlow.from_client_config(
            client_config,
            scopes=GOOGLE_SCOPES,
            redirect_uri=redirect_uri
        )
        
        # Exchange the authorization code for tokens
        flow.fetch_token(code=code)
        credentials = flow.credentials
        
        return {
            'access_token': credentials.token,
            'refresh_token': credentials.refresh_token,
            'token_expiry': datetime.now() + timedelta(seconds=credentials.expiry)
        }
    
    @staticmethod
    def refresh_access_token(refresh_token):
        """Refresh the access token using the refresh token."""
        credentials = Credentials(
            token=None,
            refresh_token=refresh_token,
            token_uri=GOOGLE_CLIENT_CONFIG['web']['token_uri'],
            client_id=GOOGLE_CLIENT_CONFIG['web']['client_id'],
            client_secret=GOOGLE_CLIENT_CONFIG['web']['client_secret'],
            scopes=GOOGLE_SCOPES
        )
        
        credentials.refresh()
        
        return {
            'access_token': credentials.token,
            'token_expiry': datetime.now() + timedelta(seconds=credentials.expiry)
        }
    
    @staticmethod
    def get_gmail_service(access_token):
        """Create a Gmail API service instance."""
        credentials = Credentials(
            token=access_token,
            scopes=GOOGLE_SCOPES
        )
        
        return build('gmail', 'v1', credentials=credentials)


class MicrosoftOAuth:
    @staticmethod
    def get_auth_url(request, state=None):
        """Generate the Microsoft OAuth authorization URL."""
        redirect_uri = request.build_absolute_uri(
            reverse('email_service:microsoft-oauth-callback')
        )
        
        # Create MSAL app
        app = ConfidentialClientApplication(
            MICROSOFT_CLIENT_ID,
            authority=MICROSOFT_AUTHORITY,
            client_credential=MICROSOFT_CLIENT_SECRET
        )
        
        # Generate the authorization URL
        auth_url = app.get_authorization_request_url(
            MICROSOFT_SCOPES,
            redirect_uri=redirect_uri,
            state=state
        )
        
        return auth_url, state
    
    @staticmethod
    def get_token_from_code(request, code):
        """Exchange authorization code for tokens."""
        redirect_uri = request.build_absolute_uri(
            reverse('email_service:microsoft-oauth-callback')
        )
        
        # Create MSAL app
        app = ConfidentialClientApplication(
            MICROSOFT_CLIENT_ID,
            authority=MICROSOFT_AUTHORITY,
            client_credential=MICROSOFT_CLIENT_SECRET
        )
        
        # Exchange the authorization code for tokens
        result = app.acquire_token_by_authorization_code(
            code,
            scopes=MICROSOFT_SCOPES,
            redirect_uri=redirect_uri
        )
        
        # Check if token acquisition was successful
        if 'access_token' not in result:
            raise ValueError(f"Error acquiring token: {result.get('error_description', 'Unknown error')}")
        
        # Calculate token expiry
        expires_in = result.get('expires_in', 3600)
        token_expiry = datetime.now() + timedelta(seconds=expires_in)
        
        return {
            'access_token': result['access_token'],
            'refresh_token': result.get('refresh_token'),
            'token_expiry': token_expiry
        }
    
    @staticmethod
    def refresh_access_token(refresh_token):
        """Refresh the access token using the refresh token."""
        # Create MSAL app
        app = ConfidentialClientApplication(
            MICROSOFT_CLIENT_ID,
            authority=MICROSOFT_AUTHORITY,
            client_credential=MICROSOFT_CLIENT_SECRET
        )
        
        # Refresh the token
        result = app.acquire_token_by_refresh_token(
            refresh_token,
            scopes=MICROSOFT_SCOPES
        )
        
        # Check if token refresh was successful
        if 'access_token' not in result:
            raise ValueError(f"Error refreshing token: {result.get('error_description', 'Unknown error')}")
        
        # Calculate token expiry
        expires_in = result.get('expires_in', 3600)
        token_expiry = datetime.now() + timedelta(seconds=expires_in)
        
        return {
            'access_token': result['access_token'],
            'token_expiry': token_expiry
        }


def get_valid_access_token(email_provider):
    """
    Get a valid access token for the email provider.
    Refreshes the token if necessary.
    """
    # Check if the token has expired or is about to expire (within 5 minutes)
    now = datetime.now()
    token_valid = (
        email_provider.access_token and 
        email_provider.token_expiry and 
        email_provider.token_expiry > now + timedelta(minutes=5)
    )
    
    if token_valid:
        return email_provider.access_token
    
    # Refresh the token
    try:
        if email_provider.provider == 'gmail':
            token_data = GoogleOAuth.refresh_access_token(email_provider.refresh_token)
        elif email_provider.provider == 'outlook':
            token_data = MicrosoftOAuth.refresh_access_token(email_provider.refresh_token)
        else:
            raise ValueError(f"Unsupported provider: {email_provider.provider}")
        
        # Update the email provider with the new token
        email_provider.access_token = token_data['access_token']
        email_provider.token_expiry = token_data['token_expiry']
        email_provider.save()
        
        return email_provider.access_token
    
    except Exception as e:
        # Handle token refresh errors
        email_provider.is_active = False
        email_provider.save()
        raise ValueError(f"Failed to refresh token: {str(e)}") 