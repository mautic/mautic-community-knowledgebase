---
title: 'Installing Mautic using DDEV'
media_order: 'safar-safarov-LKsHwgzyk7c-unsplash (1).jpg'
taxonomy:
    tag:
        - installation
        - localhost
        - dev
        - ddev
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: true
tagtitle: h2
twitterenable: true
twittercardoptions: summary
articleenabled: true
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
feed:
    limit: 10
---

[DDEV][ddev] is an OS agnostic wrapper for Docker that makes it easy to set up PHP projects on your local machine. DDEV aims to make Docker simple and accessible to everyone. Even better, DDEV is entirely open source.

In this guide we will show you how to set up a local development environment for Mautic, using DDEV.

## Installing Docker and DDEV
Before we can get started you will need to install Docker and Docker Compose. You can find documentation on how to correctly do this [here][install-docker].

Once those are installed we can continue with installing DDEV. You can find installation instructions for Linux, MacOS and Windows [here][install-ddev].

## Installing Mautic
Clone the Mautic repository into a folder of your choice. Once that is done make sure to install the Composer dependencies with composer install.

## Starting DDEV and configuring Mautic
Use the command line and navigate to the root of your Mautic installation. Once there, run 

`ddev config`

It will ask you for a project name - you can leave it at the default, or give it a custom name. This is really up to you. For the purposes of this example, we will name this project mautic.

Next it will ask for the docroot of the project.

Since the index.php of Mautic is located in the root folder of the project, we can just go with the default value. Simply press enter.

After this it will ask for the project type. Enter php and hit enter again.

Everything should now be configured. 

> Note: if you have Apache2 or nginx installed, and they are currently using port 80, ensure that you shut them down or change their ports before starting the DDEV instance. If you do not follow this step, starting will fail with an error message telling you that port 80 is already in use.

You can start DDEV by running 

`ddev start`

on the command line. 

If this is your first DDEV instance this can take a bit of time to initialise, as it will need to pull all the containers. 

Once started you will find your project at mautic.ddev.site (in case you used a different project name it will be yourprojectname.ddev.site).

Navigating there in the browser should bring up the Mautic installation. Make sure that during the installation you use the following settings:
```
Database port: 3306
Database host: db
Database user: db
Database password: db
```
You can now finish the installation process. Your local Mautic instance should be up and running!

To stop the containers, simply run 

`ddev stop` 

on the command line.

## Further useful DDEV tips and tricks
Here you can find some other useful things you might need later along the way.

### SSH into the container
To SSH in to the web container, simply use 

`ddev ssh` 

on the command line. 

If you wish to directly execute a command inside the container without going in with ssh first you can use 

`ddev exec yourcommandhere`

### Using Xdebug
You can use 

`ddev exec enable_xdebug`

and 

`ddev exec disable_xdebug`

respectively to turn Xdebug on and off.

### Changing PHP versions
Navigate to `.ddev/config.yaml` and edit the parameter called `php_version`. Once that is saved, run 

`ddev restart`

### Using additional PHP modules
Once DDEV has been set up, you can find its configuration in the .ddev folder. 

If you need an extra PHP modules enabled such as IMAP for example, you can add it doing the following:

Navigate to `.ddev/web-build` and create a file named Dockerfile. In this file copy and paste the following:

```
ARG BASE_IMAGE
FROM $BASE_IMAGE
RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y php7.2-imap
```
Now save this file and restart your DDEV instance by running 

`ddev restart`

### Using PHPMyAdmin
A DDEV instance comes with PHPMyAdmin by default. To find out the location of the PHPMyAdmin instance of the current project, use 

`ddev describe`

This will give you a lot of information about your containers, including the URL to the PHPMyAdmin instance.

[ddev]: <https://github.com/drud/ddev>
[install-docker]: <https://ddev.readthedocs.io/en/stable/users/docker_installation/>
[install-ddev]: <https://ddev.readthedocs.io/en/stable/#installation>