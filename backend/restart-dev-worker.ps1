param(
    [Parameter(Mandatory = $true)]
    [string]$SteamPath
)

$ErrorActionPreference = "Stop"

try {
    $steamExe = Join-Path $SteamPath "steam.exe"

    if (-not (Test-Path -LiteralPath $steamExe -PathType Leaf)) {
        exit 1
    }

    # Let the WMI bootstrap finish before Steam begins shutting down.
    Start-Sleep -Milliseconds 500

    Start-Process -FilePath $steamExe -ArgumentList "-shutdown" -WindowStyle Hidden | Out-Null

    $deadline = (Get-Date).AddSeconds(60)
    do {
        Start-Sleep -Milliseconds 250
        $steamProcess = Get-Process -Name "steam" -ErrorAction SilentlyContinue
    } while ($steamProcess -and (Get-Date) -lt $deadline)

    if ($steamProcess) {
        exit 2
    }

    Start-Sleep -Milliseconds 1000
    Start-Process -FilePath $steamExe -ArgumentList "-dev" | Out-Null
    exit 0
} catch {
    exit 10
}
