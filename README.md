
- [General](#general)
    - [About](#about)
    - [Directory Structure](#directory-structure)
    - [Config](#config)
    - [Prereqs](#prereqs)
  - [Setup](#setup)
    - [Build](#build)
    - [Persist Docker and set name](#persist-docker-and-set-name)
    - [Restart](#restart)
    - [Monitor](#monitor)
  - [System Components Overview](#system-components-overview)
    - [User Requests](#user-requests)
    - [DNS Configuration (AWS Route 53)](#dns-configuration-aws-route-53)
    - [Host Machine](#host-machine)
    - [Docker Container](#docker-container)
    - [Nginx Web Server](#nginx-web-server)
    - [SSL Certificates](#ssl-certificates)
    - [Web Content / Application Code](#web-content--application-code)
    - [Jenkins (CI/CD)](#jenkins-cicd)
    - [Updating the Website](#updating-the-website)

# General

### About

The Dockerfile is the cornerstone of your Dockerized Jenkins setup. Here's a more detailed look into what it might contain:

- Base Image: Start from the official Jenkins Docker image. This image is well-maintained and designed to be extended.
- Installing Dependencies: If your Jenkins instance requires additional system packages, install them here. Remember to switch back to the Jenkins user after installations.
- Pre-installing Plugins: You can automate the installation of Jenkins plugins by copying a list of plugin names into the container and using Jenkins' provided script to install them.

### Directory Structure
- docker-jenkins/: Dockerized Jenkins setup.
- webhook-server/: Express.js server for handling GitHub webhooks.
- README.md: this

### Config

- Jenkins Configuration as Code (JCasC) defines the Jenkins configurations. This allows you to version control your Jenkins configuration.
- Copy the JCasC YAML file in /docker-jenkins into your Docker image to auto-configure Jenkins on startup.
- Additional customization that can be achieved through scripts or Jenkins' Groovy hooks.
    - These scripts can be used to automate further configuration tasks, user setup, security settings, etc.


### Prereqs

| Service | Check                       | Install |
| ------- | --------------------------- | ------- |
| git     | git -v                      |         |
| docker  | sudo docker run hello-world |         |

** using the Docker Pipeline Plugin in Docker**



## Setup

### Build

```sh
docker build -t my-custom-jenkins .
```fof

### Run Docker

```sh
docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home my-custom-jenkins
```

### Persist Docker and set name

```sh
docker run -p 8080:8080 -p 50000:50000 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v jenkins_home:/var/jenkins_home \
    --restart always \
    --name jenkins \
    my-custom-jenkins
```

```sh
docker run -p 8080:8080 -p 50000:50000 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v $(which docker):/usr/bin/docker 
    -v jenkins_home:/var/jenkins_home \
    --restart always \
    --name jenkins \
    my-custom-jenkins
```

### Restart

```sh
docker stop jenkins
```

### Monitor

```sh
docker ps
docker container inspect -f '{{ .State.Status }}' [container-id or jenkins]
```

Certainly! Below is a structured README section that describes the components of your system:

---

## System Components Overview

### User Requests
- **Domain**: `intervolz.com`
- The website is publicly accessible at this domain. Users' requests to `intervolz.com` are served through a robust web hosting setup detailed below.

### DNS Configuration (AWS Route 53)
- **Role**: AWS Route 53 handles the Domain Name System (DNS) services.
- It directs domain name requests for `intervolz.com` to the specified IP address of the host machine where the web server is running.

### Host Machine
- **Function**: Hosts the Docker container running the Nginx web server.
- **Port Forwarding**: Uses port forwarding to route external traffic to the Docker container. External ports 8081 and 8082 are mapped to internal Docker ports.

### Docker Container
- **Image**: `nginx:alpine`
- **Ports**: 
  - Port 80 (HTTP) inside the container is mapped to port 8081 on the host.
  - Port 443 (HTTPS) inside the container is mapped to port 8082 on the host.
- The Docker container provides an isolated and controlled environment for the Nginx server.

### Nginx Web Server
- **Setup**: Running inside the Docker container based on the `nginx:alpine` image.
- **Configuration**: Handles both HTTP and HTTPS requests.
  - HTTP requests on port 80 are automatically redirected to HTTPS on port 443.
  - SSL Configuration:
    - SSL Certificate: `/etc/nginx/ssl/fullchain.pem`
    - SSL Certificate Key: `/etc/nginx/ssl/privkey.pem`

### SSL Certificates
- Mounted into the Docker container to enable HTTPS.
- Certificates are securely stored and only mounted as read-only in the container.

### Web Content / Application Code
- **Source**: Located in the `/src` directory of the `intervolzdotcom` repository.
- The content in this directory is copied into the Docker container and served by the Nginx server.

### Jenkins (CI/CD)
- **Role**: Automates the build and deployment of the Docker container.
- **Webhooks**: Set up to monitor the `intervolzdotcom` repository. Any updates or pushes to the repository trigger Jenkins to rebuild and redeploy the Docker container, ensuring the latest version of the site is always live.

---

### Updating the Website

To update the website, make changes to the files in the `/src` directory of the `intervolzdotcom` repository. Commit and push these changes to the repository to trigger an automatic rebuild and deployment via Jenkins.

---

This section provides a clear overview of each component's role and interaction within your web hosting setup, suitable for inclusion in a project README. It's a valuable resource for understanding the architecture and for guiding future updates or maintenance.
Sample Layout
Top: Start with user requests coming from the internet.
Next Level: Show AWS Route 53 directing the domain requests to your server.
Middle: Depict the host machine, including port mappings.
Inside the Host: Detail the Docker container running Nginx, along with port and SSL certificate configurations.
Bottom: If relevant, show how Jenkins automates the deployment process.