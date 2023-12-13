


# How to Use
   
1. Go to your Jenkins dashboard and create a new job by selecting "New Item".
2. Choose "Pipeline" and give it a name.
3. In the pipeline configuration, paste Jenkinsfile script directly.
4. Save the configuration.

## Setup

For MongoDB Data:
```sh
sudo mkdir -p /var/lib/mongodb-data
sudo chown -R jenkins:jenkins /var/lib/mongodb-data
```
For MongoDB Data Setup Script:
```sh
sudo mkdir -p /var/lib/mongodb-setup
sudo cp mongodb/mongo-init.js /var/lib/mongodb-setup
sudo chown -R jenkins:jenkins /var/lib/mongodb-setup
```