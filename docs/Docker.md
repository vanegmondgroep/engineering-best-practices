# Docker

## Install Docker

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

* Install Docker CE

```bash
sudo apt-get update && apt-get install docker-ce docker-ce-cli containerd.io
```

* Add the current user to the Docker group:

```bash
sudo usermod -aG docker $USER && sudo su - $USER
```

## Install Docker Compose

* Find the most recent version of Docker Compose [here](https://github.com/docker/compose/releases).

* Install Docker Compose (replace `<version>` with the most recent version):

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/<version>/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

## GitHub Container Registry

To pull private Docker containers you need to have access to the GitHub container registry from the server or VM. Authentication is done through a personal access token with a short expiration date and minimal scope:

* [Create a personal access token](https://github.com/settings/tokens) with scope `read:packages` and set the expiration to `7 days`. You can extend the expiry date when you're installing a server for personal use.

* Login to the GitHub container registry with your username and the generated token (password):
  ```
  docker login ghcr.io
  ```