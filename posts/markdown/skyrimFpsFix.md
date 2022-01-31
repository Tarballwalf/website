## Skyrim Fps And Physics Fix

Bethesda developers recommend you don't try to boost FPS in `Skyrim: Special Edition` above 60 FPS, but there's a way you can do it without completely destroying the in-game physics.

**WARNING:** While this fix is confirmed to work, it may cause issues with scripting and save files long term. As always, when making tweaks, always back up your files!

Find the `SkyrimPrefs.ini` file. By default, this is found in the `Documents` folder, in Windows.

    Documents/My Games/Skyrim Special Edition/SkyrimPrefs.ini

You'll need to disable the V-Sync setting. This hidden setting limits the maximum framerate to the your monitor's refresh rate, and can't be changed in-game. (If you have a high refresh monitor, leave this on as the FPS can skyrocket to well above 1000).

    Open SkyrimPrefs.ini,
    Change the setting iVSyncPresentInterval=1 from 0,
    Save as, and exit.

Next, open the `Skyrim.ini` file, in the same folder as `SkyrimPrefs.ini`. You'll need to add a few lines, and do some math.

Add this line at the end of the .ini file.

    [HAVOK]
    fMaxTime=X

`X=1/Maximum Framerate You Want`

If you own an 120hz monitor, replace X with `0.0083` -- `1/120=0.0083`. For 144hz, replace X with `0.0069`. For 240Hz, `0.0041`.

Finally, add this line to the `[Display]` category.

    [Display]
    bLockFrameRate=0

### This fix won't work for all quests

There are four specific quests that are still broken, even with this fix. It is recommended you play these four quests with the 60FPS limit and disable any changes you've made before tackling them.

The four quests are:

* Battle For Whiterun (Imperial Faction)
* Battle For Whiterun (Stormcloaks Faction)
* Battle For Windhelm
* Battle For Solitude

These quests involve a larger number of NPC actors and objects, and something about the Havoc physics engine breaks down even with the fix enabled.

I've also noticed taking screenshots with the `print screen` key will sometimes break the physics engine.

Sources: [escapistmagazine](https://v1.escapistmagazine.com/articles/view/video-games/walkthroughs/17795-Skyrim-Special-Edition-How-To-Fix-The-60-FPS-Physics-Bug)