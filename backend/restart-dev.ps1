param(
    [Parameter(Mandatory = $true)]
    [string]$SteamPath
)

$ErrorActionPreference = "Stop"

try {
    $steamExe = Join-Path $SteamPath "steam.exe"
    $worker = Join-Path $SteamPath "millennium\plugins\easy-restart-reload-for-steam\backend\restart-dev-worker.ps1"
    $powershell = Join-Path $env:SystemRoot "System32\WindowsPowerShell\v1.0\powershell.exe"

    if (-not (Test-Path -LiteralPath $steamExe -PathType Leaf)) { exit 1 }
    if (-not (Test-Path -LiteralPath $worker -PathType Leaf)) { exit 2 }
    if (-not (Test-Path -LiteralPath $powershell -PathType Leaf)) { exit 3 }

    # The real worker must not be a child of Steam/Millennium, otherwise it can
    # disappear during Steam shutdown. WMI creates it independently.
    $commandLine = '"' + $powershell + '"' +
        ' -NoLogo -NoProfile -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass' +
        ' -File "' + $worker + '"' +
        ' "' + $SteamPath + '"'

    $processClass = [WMIClass]"\\.\root\cimv2:Win32_Process"
    $startup = ([WMIClass]"\\.\root\cimv2:Win32_ProcessStartup").CreateInstance()
    $startup.ShowWindow = 0 # SW_HIDE

    $result = $processClass.Create($commandLine, $SteamPath, $startup)

    if ([int]$result.ReturnValue -ne 0 -or [int]$result.ProcessId -le 0) {
        exit 4
    }

    # Make sure the detached worker really exists before this bootstrap exits.
    Start-Sleep -Milliseconds 250
    if (-not (Get-Process -Id ([int]$result.ProcessId) -ErrorAction SilentlyContinue)) {
        exit 5
    }

    exit 0
} catch {
    exit 10
}
