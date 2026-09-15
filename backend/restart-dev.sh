#!/bin/sh

# Let the bootstrap finish before Steam begins shutting down.
sleep 0.5

# Request a clean Steam shutdown.
steam -shutdown

# Wait up to 60 seconds for the main Steam process to exit.
count=0

while pgrep -x steam >/dev/null 2>&1; do
    if [ "$count" -ge 240 ]; then
        exit 2
    fi

    sleep 0.25
    count=$((count + 1))
done

# Give the system a moment before starting Steam again.
sleep 1

# Restart Steam in Developer Mode.
exec steam -dev
