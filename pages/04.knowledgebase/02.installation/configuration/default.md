---
title: 'Mautic Configuration'
media_order: 'Screenshot 2020-10-14 at 12.13.38 PM.png,Root-URL.png,System-Settings-System-Defaults-1.jpg'
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
hero_showsearch: '1'
content:
    items: '- ''@self.children'''
    limit: '12'
    order:
        by: date
        dir: desc
    pagination: '1'
    url_taxonomy_filters: '1'
---

## Mautic Configuration
Mautic configuration is important for branding, performance, and the user experience. Once you’ve configured these settings,you probably won’t have to touch them again. 

Here’s an overview of each setting in the Configuration section of Mautic.

* System Settings
* Theme Settings
* API Settings
* Campaign Settings
* Email Settings
* Landing Page Settings
* Tracking Settings
* Report Settings
* Text Message Settings
* User/Authentication Settings (Single Sign-On)
* Webhook Settings
* Social Settings

## System Settings
**Mautic’s root URL**: Normally, when a user logs into his or her Mautic instance, he or she will go to `customdomain.domain.com (the root URL)`. However, that page is also accessible to the public. If a contact visits that address, he or she will see the Mautic login page for that instance. 

To brand that page, create a Mautic landing page that you’d want to greet any contacts who visit your root URL. Once you’ve done that, users can log into Mautic by visiting [customdomain.domain.com/s/login](customdomain.domain.com/s/login).

![](Root-URL.png)

#### SYSTEM DEFAULTS
![](System-Settings-System-Defaults-1.jpg)
**Default item limit per page**: The number of contacts, campaigns, emails, etc. you will see on each page when you go to an item section. The default is 10.

**Default time zone**: The time zone that all users are initially set up with – typically where company headquarters is, but this can be set for each individual user. The default is UTC.

_Example: HQ is in Boston and the default is set to US Eastern Time (“America New York”). A user in San Francisco (US Pacific Time – “America Los Angeles”) can have Pacific Time shown in the UI._

**Default language**: Similar to time zone, this is the language users will be set up with. However, individual users may select their own settings. By default, Mautic uses English – United States.

**Cached data timeout**: Mautic caches some data to help speed up page loads when you’re looking at certain information. Using this field, you can change how long Mautic stores this data for (from the previous load). Mautic uses 10 minutes as the default.

**Date Range Filter Default**: In reports (including campaign and email snapshots reports on the item page), this sets the default for how far back from the current date Mautic looks for data. If you’ve changed this to something on a report, Mautic will use whatever you’ve entered.

**Default format for full dates, date only, short dates, and time only:** The defaults are set for standard US time format. The letters in the boxes are PHP code. To change these, use the PHP manual.