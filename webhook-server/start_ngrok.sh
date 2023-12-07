#!/bin/bash

# Kill existing Ngrok process
kill_ngrok() {
    echo "Stopping existing Ngrok process..."
    pkill -f ngrok
}

# Check if Ngrok is already running
if pgrep -f ngrok > /dev/null; then
    kill_ngrok
fi

# Start Ngrok
ngrok http 3000


# Run the webhook update script in a subshell in the background
(
    # Wait for Ngrok to initialize
    echo "Waiting for Ngrok to initialize..."
    sleep 10

    # Run the webhook update script
    echo "Running webhook update script..."
    ./update_webhook.sh
) &
