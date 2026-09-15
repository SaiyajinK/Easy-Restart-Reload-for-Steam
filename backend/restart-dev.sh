#!/bin/sh

# Let the bootstrap finish before Steam begins shutting down.
sleep 0.5

# Keep track of the Steam processes that belong to the current session.
steam_pids=$(pgrep -x steam 2>/dev/null || true)

# The Steam launcher can keep this command attached after the client exits.
# Run it separately so it cannot block the restart worker.
steam -shutdown </dev/null >/dev/null 2>&1 &
shutdown_pid=$!

# Wait up to 60 seconds for the original Steam processes to exit.
count=0

while :; do
    steam_running=0

    for pid in $steam_pids; do
        if [ -r "/proc/$pid/stat" ]; then
            state=$(awk '{ print $3 }' "/proc/$pid/stat" 2>/dev/null)

            if [ -n "$state" ] && [ "$state" != "Z" ]; then
                steam_running=1
                break
            fi
        fi
    done

    if [ "$steam_running" -eq 0 ]; then
        break
    fi

    if [ "$count" -ge 240 ]; then
        kill "$shutdown_pid" 2>/dev/null || true
        exit 2
    fi

    sleep 0.25
    count=$((count + 1))
done

kill "$shutdown_pid" 2>/dev/null || true
wait "$shutdown_pid" 2>/dev/null || true

# Give the system a moment before starting Steam again.
sleep 1

# Restart Steam in Developer Mode.
exec steam -dev
