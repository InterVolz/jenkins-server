FROM jenkins/jenkins:lts

USER root

RUN groupadd -g 137 docker && \
    usermod -aG docker jenkins

# Update package list and install essentials
RUN apt-get update && apt-get install -y \
    # docker-ce-cli \ need to install docker on the host machine see docs.docker.com/engine/install/ubuntu/
    git \
    # any other packages you need \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh

USER jenkins

# COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
# RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt

COPY jenkins.yaml /usr/share/jenkins/ref/jenkins.yaml
ENV CASC_JENKINS_CONFIG /usr/share/jenkins/ref/jenkins.yaml
