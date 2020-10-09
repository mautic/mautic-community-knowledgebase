---
title: 'How to install Mautic on a localhost'
media_order: home-office-336377_1920.jpg
taxonomy:
    category:
        - Installation
    tag:
        - Intermediate
        - installation
        - localhost
        - dev
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: true
tagtitle: h2
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
hero_classes: ''
hero_image: ''
hero_overlay: '1'
hero_showsearch: '0'
content:
    items: '- ''@self.children'''
    limit: '12'
    order:
        by: date
        dir: desc
    pagination: '1'
    url_taxonomy_filters: '1'
feed:
    limit: 10
---

## Installing Mautic locally
This article will guide you through setting up Mautic locally for use and for development.

## Setting up your local environment
A basic knowledge of Terminal is good, although you should be able to follow along, as the commands are all fairly simple. They are mainly to get the prerequisite components installed and running.

##### 1. Install Git
Mautic uses Git as a version control system. Download and install git for your OS from [Git-download][git].

If you already have Git installed, you can get the latest development version via Git itself:

```
git clone https://github.com/git/git

```
##### 2. Install AMPPS package
AMPPS is an easy to install software stack of Apache, Mysql, PHP, Perl, Python and Softaculous auto-installer that can be used on Desktops and office servers. 

You can easily run AMPPS locally on Windows, Linux and Mac OS X by downloading it from [here][ampps download] and following the instructions relevant to your operating system to [Install Ampps][ampps install]. 

##### 3. Install Composer
Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. There are two ways to install Composer. Locally as part of your project, or globally as a system wide executable.

You can easily download and install composer on Windows, Linux and Mac OS X by downloading it from [here][composer] 


[git]:<https://git-scm.com/downloads>
[ampps download]: <http://www.ampps.com/downloads>
[ampps install]: <http://www.ampps.com/wiki/Main_Page>
[composer]: <https://getcomposer.org/doc/00-intro.md>