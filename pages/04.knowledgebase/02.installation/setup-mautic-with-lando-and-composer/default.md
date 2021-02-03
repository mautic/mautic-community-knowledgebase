---
title: 'Setup Mautic with lando & composer'
media_order: 'pic-1.png,pic-3.png,pic-2.png,pic-5.png,pic-4.png'
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: false
tagtitle: h2
routes:
    canonical: 'https://github.com/saschaeggi/mautic-lando-starterkit'
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

---
This article was Contributed by **Sascha Eggenberger**

Visit his Website at: [https://saschaeggi.medium.com/](https://saschaeggi.medium.com/)

Original article: [Setup Mautic with lando & composer](https://saschaeggi.medium.com/setup-mautic-with-lando-13eeff315c23)

---

#### Quick Tip upfront:
You can also easily checkout this repo and just ```lando start``` to spin it up: [https://github.com/saschaeggi/mautic-lando-starterkit](https://github.com/saschaeggi/mautic-lando-starterkit)

### **The Requirements**
Two setup a Mautic instance using Lando and Composer, you will need:
* [Lando](https://docs.lando.dev/)
* [Composer](https://getcomposer.org/)

### **First of all you need to install Mautic via Composer**

````
composer create-project mautic/core YOURPROJECTNAME ^3 --no-dev
```
You need to replace "YOURPROJECTNAME" with the name of the projects folder.

### **Step Two - Lando**

#### Lando-Config

Create **.lando.yml **with the following content:

```
name: mautic
recipe: lamp
config:
  webroot: .
  php: '7.3'
  database: mysql:5.7
tooling:
  mt:
    service: appserver
    description: Run Mautic commands
    cmd: bin/console
proxy:
  mailhog:
    - mail.mautic.lndo.site
services:
  appserver:
    type: php
    build_as_root:
      - docker-php-ext-install sockets
    xdebug: true
    config:
      php: .lando/php/php.ini
  database:
    type: mysql:5.7
    portforward: true
    creds:
      user: mautic
      password: mautic
      database: mautic
  mailhog:
    type: mailhog
    portforward: true
````
### **Build containers**
```
Lando Start
```
This will create the needed docker containers (can take a while).

Once the containers are up and running we can access
[https://mautic.lndo.site/](https://mautic.lndo.site/)

### **Let’s setup Mautic**

Let’s open your Mautic site at: [https://mautic.lndo.site/](https://mautic.lndo.site/)

You should see now the following screen:
![](pic-1.png)

#### **Step 1**
Set Database settings to use the following:

* Database: mautic,
* Password: mautic,
* Username: mautic
* Host: database,
* Port: 3306
![](pic-2.png)

#### **Step 2**
* Setup your admin user:
* Username: admin
* Password: SETYOURPASSWORD
* Name: Your name
* Last name: Your last name
![](pic-3.png)

#### **Step 3**

We set to use the mailserver to be the mailhog docker container:
* Server: mailhog,
* Port: 1025
* And we can access Mailhog via: [http://mail.mautic.lndo.site/](http://mail.mautic.lndo.site/)
![](pic-4.png)

#### **Login**
You can now login to your freshly installed Mautic setup with the credentials from the previous step.
![](pic-5.png)
