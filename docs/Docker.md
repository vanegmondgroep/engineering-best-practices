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

## Install Docker Compose



## Authenticate to the GitHub container registry

To pull private Docker containers you need to have access to the GitHub container registry from the server or VM. Authentication is done through a personal access token with a short expiration date and minimal scope:

* [Create a personal access token](https://github.com/settings/tokens) with scope `read:packages` and set the expiration to `7 days`. You can extend the expiry date when you're installing a server for personal use.

* Login to the GitHub container registry with your username and the generated token (password):
  ```
  docker login ghcr.io
  ```