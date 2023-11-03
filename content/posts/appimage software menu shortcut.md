---
title: "Appimage Software Menu Shortcut"
date: 2021-03-23T10:35:54+03:00
draft: false
tags: ["linux", "appimage", "applications"]
weight: 110
ShowToc: true
---

# Introduction 

I am going demonstrate how you can add an appimage application shortcut to linux desktop system's application menu and also how to customize its icon.But first lets get to understand what an appimage software is.

# What is an appimage application

For starters,there are many ways an application can be installed in a linux system i.e deb packages,snaps,flatpaks and appimages.Our focus today is appimages.
An Appimage application is a single portable and executable software that can be run on linux without installation.

## Benefits of using appimages

* Compatibility with most linux distributions.
* Simple to run i.e download,make it executable and run.since it is not installed no system libraries are altered.
* Download and use trusted software directly from the original author(s).
* Uninstalling is as simple as just deleting the file. 

# Running an app image

Lets download the fluent reader software(it is a modern rss reader) as an example.
<a href='https://github.com/yang991178/fluent-reader/releases/'>![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vx6ky9gx0k4m67pxzrl7.png) </a>
Once download is completed,navigate to the downloads folder and right-click on the downloaded appimage file,click on Properties thereafter,Click on the permissions tab and check the execute option.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e1zzsddos3f1ybcf8epw.png)
The software should be running by now without any problems.

# Adding a shortcut with custom icon to the linux application menu

**Note: super user permission is required for this process.**
* Open the terminal
* Navigare to the /usr/share/applications directory.
* Create a new file with a .desktop extension in the applications directory.
* Open the file with gedit
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iycr868yzpkluvmx2jmh.png)
* Add the following template text to your empty file and replace with the location of your exec(i.e appimage location) and icon of your choice.eg
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6rnf41qi9v2gewl2xvwu.png)
* Save your file and exit the terminal.

You should be able to see your software shortcut in the menu and it should run when clicked if you followed the steps above correctly.

**Thanks and have fun🙂**


