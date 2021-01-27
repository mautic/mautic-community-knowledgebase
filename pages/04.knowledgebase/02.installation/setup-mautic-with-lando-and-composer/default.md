---
title: 'Setup Mautic with lando & composer'
anchors:
    active: false
tagtitle: h2
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

**The Requirements**

You the following two things to setup your Mautic instance
* lando https://docs.lando.dev/
* composer https://getcomposer.org/

**Step One - First of all you need to install Mautic via Composer**

````
composer create-project mautic/core YOURPROJECTNAME ^3 --no-dev
```
You need to replace "YOURPROJECTNAME" with the name of the projects folder.

**Step Two - Lando**
