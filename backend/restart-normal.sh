#!/bin/sh

sleep 0.5

steam_pids=$(pgrep -x steam 2>/dev/null || true)
steam_command=$(command -v steam 2>/dev/null || true)

if [ -z "$steam_command" ]; then
    steam_command="$HOME/.local/share/Steam/steam.sh"
fi

if [ ! -x "$steam_command" ]; then
    exit 1
fi

for pid in $steam_pids; do
    kill -KILL "$pid" 2>/dev/null || true
done

sleep 1

exec "$steam_command"
