Add-Type -AssemblyName System.Drawing

function Convert-ToTransparentPng([string]$inputPath, [string]$outputPath) {
    $fullInput = (Resolve-Path $inputPath).Path
    $bmp = [System.Drawing.Bitmap]::FromFile($fullInput)
    $w = $bmp.Width
    $h = $bmp.Height
    $target = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($target)
    $g.DrawImage($bmp, 0, 0, $w, $h)
    $g.Dispose()
    $bmp.Dispose()

    $visited = New-Object 'bool[,]' $w, $h
    $queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

    for ($x = 0; $x -lt $w; $x++) {
        $queue.Enqueue((New-Object System.Drawing.Point($x, 0)))
        $queue.Enqueue((New-Object System.Drawing.Point($x, $h - 1)))
        $visited[$x, 0] = $true
        $visited[$x, $h - 1] = $true
    }
    for ($y = 0; $y -lt $h; $y++) {
        $queue.Enqueue((New-Object System.Drawing.Point(0, $y)))
        $queue.Enqueue((New-Object System.Drawing.Point($w - 1, $y)))
        $visited[0, $y] = $true
        $visited[$w - 1, $y] = $true
    }

    $transparent = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)

    while ($queue.Count -gt 0) {
        $pt = $queue.Dequeue()
        $px = $target.GetPixel($pt.X, $pt.Y)
        if ($px.R -gt 225 -and $px.G -gt 225 -and $px.B -gt 225) {
            $target.SetPixel($pt.X, $pt.Y, $transparent)
            
            $nx = $pt.X + 1; $ny = $pt.Y
            if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h -and -not $visited[$nx, $ny]) {
                $visited[$nx, $ny] = $true; $queue.Enqueue((New-Object System.Drawing.Point($nx, $ny)))
            }
            $nx = $pt.X - 1; $ny = $pt.Y
            if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h -and -not $visited[$nx, $ny]) {
                $visited[$nx, $ny] = $true; $queue.Enqueue((New-Object System.Drawing.Point($nx, $ny)))
            }
            $nx = $pt.X; $ny = $pt.Y + 1
            if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h -and -not $visited[$nx, $ny]) {
                $visited[$nx, $ny] = $true; $queue.Enqueue((New-Object System.Drawing.Point($nx, $ny)))
            }
            $nx = $pt.X; $ny = $pt.Y - 1
            if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h -and -not $visited[$nx, $ny]) {
                $visited[$nx, $ny] = $true; $queue.Enqueue((New-Object System.Drawing.Point($nx, $ny)))
            }
        }
    }

    $fullOutput = [System.IO.Path]::GetFullPath($outputPath)
    $target.Save($fullOutput, [System.Drawing.Imaging.ImageFormat]::Png)
    $target.Dispose()
    Write-Output "Successfully saved $outputPath"
}

Convert-ToTransparentPng 'public\images\banners\ultrasound-machine.jpg' 'public\images\banners\ultrasound-machine.png'
Convert-ToTransparentPng 'public\images\banners\mri-scanner.jpg' 'public\images\banners\mri-scanner.png'
