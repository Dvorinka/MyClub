# PowerShell script to update HTML lang attribute to "cs" in all HTML files

# Get all HTML files in the current directory and subdirectories
$files = Get-ChildItem -Path . -Filter "*.html" -Recurse -File

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $newContent = $content -replace '<html lang="en">', '<html lang="cs">'
    
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Updated: $($file.FullName)"
    } else {
        Write-Host "No changes needed: $($file.FullName)"
    }
}

Write-Host "Language update complete!"
