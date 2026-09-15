#!/bin/sh

sleep 0.5

steam_pids=$(pgrep -x steam 2>/dev/null || true)

steam -shutdown </dev/null >/dev/null 2>&1 &
shutdown_pid=$!

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

sleep 1

exec steam
