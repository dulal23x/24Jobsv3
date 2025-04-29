# PowerShell script to start both Django and Vite servers

# Start Django server in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $PSScriptRoot; python manage.py runserver"

# Start Vite dev server
Set-Location -Path "$PSScriptRoot\frontend"
npm run dev 