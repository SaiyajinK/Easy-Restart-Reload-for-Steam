local millennium = require("millennium")

local function quote_arg(value)
    local text = tostring(value or "")
    return '"' .. text:gsub('"', '\\"') .. '"'
end

local function utf8_to_wide(ffi, kernel32, value)
    local CP_UTF8 = 65001
    local input = tostring(value or "")
    local required = kernel32.MultiByteToWideChar(CP_UTF8, 0, input, -1, nil, 0)

    if required <= 0 then
        return nil
    end

    local buffer = ffi.new("WCHAR[?]", required)
    local written = kernel32.MultiByteToWideChar(CP_UTF8, 0, input, -1, buffer, required)

    if written <= 0 then
        return nil
    end

    return buffer
end

---@ffi
---@return boolean
function restart_developer_mode()
    if package.config:sub(1, 1) ~= "\\" then
        return false
    end

    local steam_path = millennium.steam_path()
    if not steam_path or steam_path == "" then
        return false
    end

    local ok_ffi, ffi = pcall(require, "ffi")
    if not ok_ffi or not ffi then
        return false
    end

    ffi.cdef[[
        typedef unsigned short WCHAR;
        typedef void* HWND;
        typedef void* HINSTANCE;

        int MultiByteToWideChar(
            unsigned int CodePage,
            unsigned long dwFlags,
            const char* lpMultiByteStr,
            int cbMultiByte,
            WCHAR* lpWideCharStr,
            int cchWideChar
        );

        HINSTANCE ShellExecuteW(
            HWND hwnd,
            const WCHAR* lpOperation,
            const WCHAR* lpFile,
            const WCHAR* lpParameters,
            const WCHAR* lpDirectory,
            int nShowCmd
        );
    ]]

    local ok_kernel, kernel32 = pcall(ffi.load, "kernel32")
    local ok_shell, shell32 = pcall(ffi.load, "shell32")

    if not ok_kernel or not kernel32 or not ok_shell or not shell32 then
        return false
    end

    local system_root = os.getenv("SystemRoot") or "C:\\Windows"
    local powershell = system_root .. "\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
    local helper = steam_path .. "\\millennium\\plugins\\easy-restart-reload-for-steam\\backend\\restart-dev.ps1"

    local parameters = table.concat({
        "-NoLogo",
        "-NoProfile",
        "-NonInteractive",
        "-WindowStyle Hidden",
        "-ExecutionPolicy Bypass",
        "-File " .. quote_arg(helper),
        quote_arg(steam_path),
    }, " ")

    local operation_w = utf8_to_wide(ffi, kernel32, "open")
    local powershell_w = utf8_to_wide(ffi, kernel32, powershell)
    local parameters_w = utf8_to_wide(ffi, kernel32, parameters)

    if not operation_w or not powershell_w or not parameters_w then
        return false
    end

    -- SW_HIDE = 0. The bootstrap itself is invisible.
    local result = shell32.ShellExecuteW(
        nil,
        operation_w,
        powershell_w,
        parameters_w,
        nil,
        0
    )

    local result_code = tonumber(ffi.cast("intptr_t", result)) or 0
    return result_code > 32
end
