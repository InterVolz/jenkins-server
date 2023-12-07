#!/bin/bash

# Start Ngrok
ngrok http 3000 &

# Wait for Ngrok to initialize
sleep 10

# Run the webhook update script
./update_webhook.sh
