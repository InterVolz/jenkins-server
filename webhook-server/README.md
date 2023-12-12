

## Run ngrok external IP and redirect to jenkins@:8080

```sh
ngrok http 8080
```

## Setup


### Copy COPY_update_webhook and edit:

- GITHUB_USER="maxwellvolz"
- GITHUB_REPO="InterVolz/intervolzdotcom"
- WEBHOOK_ID="447654781"
- GITHUB_TOKEN="your_github_token"

### Allow execution
```sh
chmod +x update_webhook.sh
```