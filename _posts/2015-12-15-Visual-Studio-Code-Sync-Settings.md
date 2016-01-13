---
layout: post
title: Visual Studio Code Settings Synchronization
description : synchronize your visual studio code settings across multiple machines. Whether your editor settings are changed in office you can set synchronize that settings in home editor also.
---

I have developed a small utility in order to synchronize your visual studio code settings across multiple machines. Whether your editor settings are changed in office you can set synchronize that settings in home editor also.



### Key Features


* Use your github account token.
* Easy to Upload and Download on one click.
* Saves all settings and snippets files.
* Upload Key : Shift + Alt + u
* Download Key : Shift + Alt + d
* Type Sync In Order to View all sync options



### It Sync

* Settings File
* Keybinding File
* Launch File
* Snippets Folder
* VSCode Extensions

	
## Steps To Get the Github Key.

This extension required your GitHub Account Personal Access Token. You can create one simple by looking into the following pictures.

#### Goto Settings / Personal Access Tokens / Generate New Token

![Goto Settings / Personal Access Tokens](/img/github1.PNG)

#### Select Scopes

![Select Scopes](/img/github2.PNG)

<strong>Get Unique Key</strong>

![Get Unique Key](/img/github3.PNG)

<blockquote>
<p>
You need to save this key for this extension for future use, and dont share this key with anyone as it will get your data without needing to logg in.
</p>
</blockquote>


## Upload Your Settings For the first time


<strong>Press Ctrl + Alt + u it will ask your github account access token.</strong>
Enter the github account in the window and click enter.

![github account access token](/img/upload1.png)

<strong>Upload your settings automatically and give you GIST ID.</strong>
Copy this Gist ID in order to download the settings in other machines.

![uploaded automatically](/img/upload2.png)


## Download your Settings

<strong>Press Ctrl + Alt + d it will ask your github account access token.</strong>
Enter the github account in the window and click enter.

![github account access token](/img/upload1.png)

<strong>Enter Your GIST ID.</strong>
you need to enter your Gist ID in order to get the all files

![Enter Your GIST ID](/img/download2.png)

<strong>Settings Downloaded.</strong>
You are Done ! All your files are downloaded

![Enter Your GIST ID](/img/download3.png)
