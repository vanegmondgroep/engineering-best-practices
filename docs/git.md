# Git

[[toc]]

## Installation

* Install Git:

```bash
sudo apt install git-all
```

## Authenticate to GitHub

To push and pull code from GitHub you need to have access to the repository from your server or VM. The authentication method you use depends on wether you're installing a server for a client or for yourself / development:

* Generate a new SSH key pair (don't overwrite existing keys, press enter on every step):

```bash
# Personal installation
ssh-keygen -t ed25519 -C "<your-email>"

# Client installation
ssh-keygen -t ed25519 -C "sip-<client>-<project>"
```

* Copy the contents of the public key to your clipboard:

```bash
cat ~/.ssh/id_ed25519.pub
```

* Add the SSH public key to GitHub:
   * **Personal installation:** [add the public SSH key to your GitHub account.](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) _Note: the server can access all the repository you have access to._

   * **Client installation:** [add the public SSH key as deployment key to the  repository.](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys) _Note: the server can only access a single repository._

* Configure your Git name and email:

```bash
# Personal installation
git config --global user.email "<your-email>"
git config --global user.name "<firstname> <lastname>"

# Client installation:
git config --global user.email "<project>@vanegmond.nl"
git config --global user.name "<project>"
```

## Links

* [GitHub Tutorial](https://guides.github.com/activities/hello-world/)
