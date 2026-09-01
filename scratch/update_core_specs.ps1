$path = "c:\All files\Projects_Products\Vibrant-HealthCare\data\devices.json"
$json = Get-Content $path | ConvertFrom-Json

foreach ($device in $json) {
    $highlights = $device.specifications.highlights
    
    $architecture = "Standard"
    $monitor = "Standard Output"
    
    if ($highlights -ne $null) {
        foreach ($h in $highlights) {
            if ($h.title -like "*Architecture*") {
                $architecture = $h.detail
            }
            if ($h.title -like "*Monitor*") {
                $monitor = $h.detail
            }
        }
    }
    
    $archDesc = if ($architecture -eq "Standard") { "Reliable architecture for consistent imaging performance." } else { "State-of-the-art framework for optimal performance and clarity." }
    $monitorDesc = if ($monitor -eq "N/A" -or $monitor -eq "Standard Output") { "Clear output for precise diagnostic assessment." } else { "High-resolution display tailored for clinical precision." }
    
    $coreSpecs = @(
        @{ title = "$architecture Architecture"; description = $archDesc },
        @{ title = "$monitor Display"; description = $monitorDesc },
        @{ title = "Advanced Workflow"; description = "Automated tools included for faster throughput and efficiency." }
    )
    
    $device.specifications | Add-Member -NotePropertyName "coreSpecs" -NotePropertyValue $coreSpecs -Force
}

$json | ConvertTo-Json -Depth 10 | Set-Content $path
Write-Host "Updated devices.json with coreSpecs"
