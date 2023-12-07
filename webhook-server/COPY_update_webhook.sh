#!/bin/bash

# Fetch the new Ngrok URL
NGROK_URL=$(curl -s http://127.0.0.1:4040/api/tunnels | jq -r '.tunnels[0].public_url')

# GitHub repository details
GITHUB_USER="maxwellvolz"
GITHUB_REPO="InterVolz/intervolzdotcom"
WEBHOOK_ID="447654781"
GITHUB_TOKEN="your_github_token"

# Update the GitHub webhook
curl -s -X PATCH \
     -H "Authorization: token $GITHUB_TOKEN" \
     -H "Content-Type: application/json" \
     -d "{\"config\":{\"url\":\"$NGROK_URL/webhook\",\"content_type\":\"json\"}}" \
     "https://api.github.com/repos/$GITHUB_USER/$GITHUB_REPO/hooks/$WEBHOOK_ID"
Running the Script on Windows