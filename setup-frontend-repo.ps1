# Initialize the git repository
git init

# Add the frontend files based on the gitignore patterns
git add .

# Check if there are any nested repositories and remove them from the index
$nestedRepos = git ls-files --stage | Select-String "^160000"
if ($nestedRepos) {
    Write-Host "Found nested repositories. Removing them from the index..."
    $nestedRepos | ForEach-Object {
        $file = ($_ -split "\s+")[-1]
        git rm --cached $file
        Write-Host "Removed $file from git index"
    }
}

# Initial commit with frontend files only
git commit -m "Initial commit with frontend-only files"

# Instructions for pushing to GitHub
Write-Host "Repository initialized with frontend files only."
Write-Host ""
Write-Host "To push to GitHub, create a new repository and then run:"
Write-Host "git remote add origin <your-github-repo-url>"
Write-Host "git branch -M main"
Write-Host "git push -u origin main" 