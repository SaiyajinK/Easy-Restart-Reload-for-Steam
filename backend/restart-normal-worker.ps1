param(
    [Parameter(Mandatory = $true)]
    [string]$SteamPath
)

$ErrorActionPreference = "Stop"

try {
    Start-Sleep -Milliseconds 500

    $steamExe = Join-Path $SteamPath "steam.exe"

    if (-not (Test-Path -LiteralPath $steamExe -PathType Leaf)) {
        exit 1
    }

    Start-Process -FilePath $steamExe -ArgumentList "-shutdown"

    $timeoutMilliseconds = 60000
    $elapsedMilliseconds = 0

    while (Get-Process steam -ErrorAction SilentlyContinue) {
        if ($elapsedMilliseconds -ge $timeoutMilliseconds) {
            exit 2
        }

        Start-Sleep -Milliseconds 250
        $elapsedMilliseconds += 250
    }

    Start-Sleep -Seconds 1

    Start-Process -FilePath $steamExe

    exit 0
} catch {
    exit 10
}
