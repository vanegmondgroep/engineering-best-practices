# Ubuntu

[[toc]]

## Mount network share

This guide covers the installation and configuration of a network share on Ubuntu.

* Install CIFS:

```bash
sudo apt-get install cifs-utils
```

* Create mount directory:

```bash
mkdir -p /mnt/share
```

* Get your user ID:

```bash
id -u
```

* Edit `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

* Add share configuration to `/etc/fsab`:

```
//<server-ip>/<share-name> /mnt/share cifs username=<share-username>,password=<share-password>,uid=<user-id>,iocharset=utf8 0 0
```

::: tip
The folder will be mounted when the server is rebooted. Run the following command to mount without a reboot:

```bash
sudo mount /mnt/share
```
:::
