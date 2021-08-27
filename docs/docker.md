# Docker

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.

[[toc]]

## Installation

* Install required packages:

```bash
sudo apt-get update

sudo apt-get install \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg \
     lsb-release
```

* Add Docker’s official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

* Install Docker CE:

```bash
sudo apt-get update && apt-get install docker-ce docker-ce-cli containerd.io
```

* Add the current user to the Docker group:

```bash
sudo usermod -aG docker $USER && sudo su - $USER
```

## Authenticate to GitHub

To pull private Docker containers you need to have access to the GitHub container registry from the server or VM. Authentication is done through a personal access token with a short expiration date and minimal scope:

* [Create a personal access token](https://github.com/settings/tokens) with scope `read:packages` and set the expiration to `7 days`. You can extend the expiry date when you're installing a server for personal use.

* Login to the GitHub container registry with your username and the generated token (password):

```
docker login ghcr.io
```

## Commands

* List running containers:

```bash
docker ps
```

* Show container logs:

```bash
docker logs <container-id>
```

## Links

* [Documentation](https://docs.docker.com/engine/)
* [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
