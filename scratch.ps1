$path = "c:\All files\Projects_Products\Lab-device\src\app\devices\[id]\page.jsx"
$content = [System.IO.File]::ReadAllText($path)

$content = $content -replace 'text-on-surface(?!-)', 'text-on-surface dark:text-white'
$content = $content -replace 'text-on-surface-variant(?! dark:)', 'text-on-surface-variant dark:text-gray-300'
$content = $content -replace 'bg-surface-container(?!-)', 'bg-surface-container dark:bg-slate-700'
$content = $content -replace 'bg-white(?!/)', 'bg-white dark:bg-slate-800'
$content = $content -replace 'text-outline(?!-)', 'text-outline dark:text-gray-400'
$content = $content -replace 'border-outline-variant(?!/)', 'border-outline-variant dark:border-slate-700'
$content = $content -replace 'border-outline(?!-)', 'border-outline dark:border-slate-600'
$content = $content -replace 'bg-primary-container(?! dark:)', 'bg-primary-container dark:bg-slate-700'
$content = $content -replace 'glass-card(?! dark:)', 'glass-card dark:bg-slate-800 dark:border-slate-700'

# Clean up any potential double dark classes if they were partially applied
$content = $content -replace 'dark:text-white dark:text-white', 'dark:text-white'
$content = $content -replace 'dark:text-gray-300 dark:text-gray-300', 'dark:text-gray-300'
$content = $content -replace 'dark:bg-slate-700 dark:bg-slate-700', 'dark:bg-slate-700'
$content = $content -replace 'dark:bg-slate-800 dark:bg-slate-800', 'dark:bg-slate-800'
$content = $content -replace 'dark:text-gray-400 dark:text-gray-400', 'dark:text-gray-400'
$content = $content -replace 'dark:border-slate-700 dark:border-slate-700', 'dark:border-slate-700'
$content = $content -replace 'dark:border-slate-600 dark:border-slate-600', 'dark:border-slate-600'

[System.IO.File]::WriteAllText($path, $content)
Write-Host "Done"
