#!/bin/sh

sleep 0.5

steam -shutdown

count=0

while pgrep -x steam >/dev/null 2>&1; do
    if [ "$count" -ge 240 ]; then
        exit 2
    fi

    sleep 0.25
    count=$((count + 1))
done

sleep 1

exec steam
