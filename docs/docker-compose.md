# Docker Compose

[[toc]]

## Installation

* Find the most recent version of Docker Compose [here](https://github.com/docker/compose/releases).

* Install Docker Compose (replace `<version>` with the most recent version):

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/<version>/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

## Commands

* Start containers:

```bash
docker-compose up -d
```

* Stop containers:

```bash
docker-compose down
```

* Show container logs:

```bash
docker-compose logs <container-name>
```

* Login to a container:

```bash
docker-compose exec <container-name> bash
```

## Links

* [Documentation](https://docs.docker.com/compose/)