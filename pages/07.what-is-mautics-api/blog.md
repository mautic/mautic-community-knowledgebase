---
title: 'What is Mautic''s API?'
media_order: 'bg_hero_klb4.jpg,Screenshot 2020-08-01 at 1.06.20 AM.png'
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: true
tagtitle: h2
menu: FAQs
visible: true
hero_overlay: true
hero_showsearch: true
show_searchsidebar: false
show_breadcrumbs: true
show_pagination: true
content:
    items:
        - '@self.children'
    limit: 12
    order:
        by: date
        dir: desc
    pagination: true
    url_taxonomy_filters: true
feed:
    limit: 10
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

#  Mautic API

Mautic has a great API to interact with other systems. The REST API serves as a powerful gateway to the Mautic system. It supports an ample amount of calls allowing users to programmatically create, read, delete, and modify different components within Mautic.
The Mautic API requires OAuth (1a or 2) authentication. The API can be used to:
* Build meaningful integrations with in-house systems – CRM, ERP, social, and more.
* Batch update Mautic components.
* Create advanced triggers and alerts.
* Achieve the valuable use case that you envision.

This guide allows you to quickly communicate with the Mautic API. For full API documentation, please refer to [https://developer.mautic.org/#rest-api.](https://developer.mautic.org/#rest-api)

# How to Use the Mautic Rest API  

Here are the basic steps to getting started with the Mautic API.

1.  Install the Mautic API 
* **With Composer**: API library is at Packagist. composer require mautic/api-library command will install the library to your project for you. Composer will also automatically include the library to your project.
* **Install by git clone**: Go to your project folder where you want to place the Mautic API library.  For example:
 cd /var/www/html/myproject.  Run git clone to this folder: git clone [https://github.com/mautic/api-library.git](https://github.com/mautic/api-library.git)
* **Copy from ZIP package**: Download the library from [https://github.com/mautic/api-library/archive/master.zip](https://github.com/mautic/api-library/archive/master.zip). Extract the package to some temporary location. Copy the /lib folder to your project.

2. Mautic Setup
To enable the API in Mautic, follow these steps:
* Go to the Configuration page (located in the Settings menu), and under API Settings enable Mautic's API. 
![](Screenshot%202020-08-01%20at%201.06.20%20AM.png)![](Screenshot%202020-08-01%20at%201.06.20%20AM.png)
* If you intend on using Basic Authentication, ensure you enable it. You can also choose which OAuth protocol to use here.
*![](basic.png)
* After saving the configuration, go to the API Credentials page (located in the Settings menu).

* Create a new client. Enter the callback/redirect URI that the request will be sent from. 
* Click Apply then copy the Client ID and Client Secret to the application that will be using the API.


