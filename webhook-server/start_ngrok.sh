#!/bin/bash

# Kill existing Ngrok process
kill_ngrok() {
    echo "Stopping existing Ngrok process..."

    NGROK_PID=$(pgrep -f ngrok)
    
    if [ ! -z "$NGROK_PID"]; then
        kill -9 $NGROK_PID
    fi
}

# Check if Ngrok is already running
if pgrep -f ngrok > /dev/null; then
    kill_ngrok
    sleep 3
fi

echo "Starting Ngrok..."
ngrok http 3000 &

NGROK_PID = $!

update_webhook() {
    sleep 5
    ./update_webhook.sh
}

(update_webhook &)

wait $NGROK_PID