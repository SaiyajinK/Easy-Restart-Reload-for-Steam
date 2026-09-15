#!/bin/sh

# Let the bootstrap finish before Steam begins shutting down.
sleep 0.5

# Keep track of the Steam processes that belong to the current session.
steam_pids=$(pgrep -x steam 2>/dev/null || true)
steam_command=$(command -v steam 2>/dev/null || true)

if [ -z "$steam_command" ]; then
    steam_command="$HOME/.local/share/Steam/steam.sh"
fi

if [ ! -x "$steam_command" ]; then
    exit 1
fi

# Force the original Steam processes to close immediately.
for pid in $steam_pids; do
    kill -KILL "$pid" 2>/dev/null || true
done

# Give the system a moment before starting Steam again.
sleep 1

# Restart Steam in Developer Mode.
exec "$steam_command" -dev
