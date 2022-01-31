## Mesa Drivers Installation

You can check if your system uses Mesa and the installed versions using this command:

```
$ glxinfo | grep Mesa
```

Installing new Mesa graphics drivers may also need a newer Linux kernel. It will be a good idea to enable HWE kernel on Ubuntu to reduce the chances of conflict with the kernel. HWE Kernel gives you the latest stable kernel used by Ubuntu on an older LTS release.

### Stable Mesa driver [[Latest point release](https://launchpad.net/~kisak/+archive/ubuntu/kisak-mesa)]

The [Kisak-mesa](https://launchpad.net/~kisak/+archive/ubuntu/kisak-mesa) PPA provides the latest point release of Mesa. You can use it by entering the following commands terminal:

```
$ sudo add-apt-repository ppa:kisak/kisak-mesa
$ sudo apt update
$ sudo apt upgrade -y
```

It will give you the latest Mesa point release.

### Remove it and go back to original Mesa driver

If you are facing issues and do not want to use the newer version of Mesa, you can revert to the original version.

Install PPA Purge tool first:

```
$ sudo apt install ppa-purge
```

And then use it to remove the PPA as well as the Mesa package version installed by this PPA.

```
$ sudo ppa-purge ppa:kisak/kisak-mesa
```

## Latest Mesa graphics [[Bleeding edge](https://launchpad.net/~oibaf/+archive/ubuntu/graphics-drivers)]

If you want the latest Mesa drivers as they are being developed, this is what you need.

The best thing here is that all driver packages are automatically built twice a day, when there is an upstream change.

If you want the absolute latest Mesa drivers on Ubuntu and do not want to take the trouble of installing it from the source code, use this PPA by [Oibaf](https://launchpad.net/~oibaf/+archive/ubuntu/graphics-drivers).

The PPA is available for 20.04, 20.10 and 21.04 at the time of writing this post. It is no longer updated for Ubuntu 18.04 LTS.

Open the terminal and use the following commands:

```
$ sudo add-apt-repository ppa:oibaf/graphics-drivers
$ sudo apt update
$ sudo apt upgrade -y
```

This will give you the latest Mesa drivers. Note that you might run into issues running these drivers.

## Remove it and go back to original Mesa driver

You can remove the PPA and the latest Mesa driver using the ppa-purge tool.

Install it first:

```
$ sudo apt-get install ppa-purge
```

Now use it to disable the PPA you had added and revert the Mesa package to the version provided by Ubuntu officially.

```
$ sudo ppa-purge ppa:oibaf/graphics-drivers
```

Note: Updating the drivers will require Steam to download and recompile the shader cache

Sources: [itsfoss](https://itsfoss.com/install-mesa-ubuntu/)