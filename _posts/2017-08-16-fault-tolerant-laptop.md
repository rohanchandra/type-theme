---
layout: post
title:  "The Fault Tolerant Laptop"
tags: DevOps
---

I need a good system to ensure I never lose any of my files. To help ensure this doesn't happen I'm regularily erasing the entire drive on my computer - including OS - and reloading from backups.

In the DevOps world this would be referred to as injecting failure into the system. See Netflix's Symbian Army for more details.

Right now I think I will aim for a fresh install every 3 months but I would love to bring it down to weekly or even nightly through automation.

## First off, here's a list of the software I use on my Mac:

- Mac OS X (whatever the latest version is)
- Google Chrome
- 1Password
- Sublime Text 3
- iTerm
- Microsoft Office Suite (available with my University email for free, though the download link is always very hard to find)
- Postman (a chrome app)
- Authy (a chrome app)
- 1Password chrome extention
- Ublock Origin chrome extention
- Google File System
- MalwareBytes
- VLC
- SnapScan (for my scanner)
- TorGuard client
- Flux

There's also some terminal installed software I run but at the moment I'm not an expert at this stuff, I just Google until I fix whatever errors I have:

- brew:
  - mariadb (something something mysql alternative)
  - sqlite
  - php71
  - some other laravel dependencies
- composer (php dependency manager)
- laravel (my framework of choice)
- probably more...

## My PC setup is a little different and includes many of the previous with the addition of:

- git bash command line
- git
- Steam with all my games (PC is a custom built gaming rig)
- PuTTY (to connect to servers)
- probably more...

## File structure

I'm attempting to hold all my files in my Google Drive.
With a GSuite business organization you can have "unlimited" storage and team drives, I have a different drive for each business entity, media, and personal files.

I don't keep my development projects in Google Drive, instead I use GitHub repos for all of them which is a bit better for that kind of thing.

SSH keys are stored in a hidden folder in the Home folder. This is still an issue I'm dealing with because I almost forgot about them when erasing my laptop one day, maybe I can put them in 1Password or look into a more specific solution.

## The Reinstall

The optimal process looks like this:

1. Use some kind of tool to delete hard drive on a whim
2. Reinstall operating system (for Mac I have it on a USB stick)
3. Install software mentioned above (currently redownloading it but I could probably have it cached in a repository somewhere)
4. Set up Google Drive to access my personal files

## Notes:

Before formatting the drive I always double check all the folders for anything I may have forgot about and would be the only copy (downloads folder is a common spot). 
I would like to make this step unnecessary.

Backing up Google Drive is a material step in this system that still needs to be designed.