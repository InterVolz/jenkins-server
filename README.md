
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