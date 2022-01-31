### Conky Installation

Latest Conky package is included into default Linux Mint, Debian and Ubuntu repositories.

Run the following command to install Conky with all features enabled:

```
$ sudo apt-get install conky conky-all
```

I’d also suggest you to install some extra staff that you may need in future:

```
$ sudo apt-get install curl lm-sensors hddtemp
```

#### Start Conky

Execute the following command to start Conky in a background:

```
$ conky -d
Conky: forked to background, pid is 11122
```

#### Stop Conky

Execute the following command to stop Conky:

```
$ pkill conky
Conky: received SIGINT or SIGTERM to terminate. bye!
```

#### Restart Conky

Execute the following command to restart Conky:

```
$ pkill -HUP conky
Conky: received SIGHUP or SIGUSR1. reloading the config file.
```

It makes Conky reread its configuration file.

### Setup Conky To Run On Startup

Press `Alt+F2` to bring up the “Run dialog”.

Type `gnome-session-properties` if you use GNOME desktop or type `mate-session-properties` if you use MATE. Press the Run button. Or manually search for the `Startup Applications Preferences`

Click the `Add` button and fill in the fields as follows:

| Field   | Value            |
|---------|------------------|
| Name    | conky            |
| Command | conky -p 15      |
| Comment | A system monitor |

Reboot to force conky to start

>conky -p 15 command starts Conky with a delay in 15 seconds. We needed it to prevent Conky from starting before the desktop. Change the delay if Conky still appears before the desktop and disappears as soon as wallpaper is loaded.

### Conky Configuration

>Conky will firstly try to look for a local `~/.conkyrc` file and if it doesn’t exist, then it will read the default one – `/etc/conky/conky.conf`.

Copy the default **Conky config** to your home directory.

```
$ cp /etc/conky/conky.conf ~/.conkyrc
```

Now edit `~/.conkyrc` file to make changes to Conky:

```
$ vi ~/.conkyrc
```

Or alternately, edit the default config file (not recommended)

Sources: [ShellHacks](https://www.shellhacks.com/install-configure-conky-linux-mint-ubuntu-debian/), [Conky Variables](http://conky.sourceforge.net/variables.html)