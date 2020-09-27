---
title: 'Getting Started with Mautic'
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
    items: '@self.children'
    limit: '12'
    order:
        by: date
        dir: desc
    pagination: '1'
    url_taxonomy_filters: '1'
---

##  What is Marketing Automation? 
Marketing automation is the use of software to deliver personalized messages to customers and leads. The software allows you to create a dynamic series of messages to send to your contacts. Marketing automation offers an exciting opportunity for greater efficiency, cost reduction, and an enhanced customer experience.

##  What is Mautic?
Mautic is the world’s first open-source marketing automation system.

## What does Mautic offer?
* Campaign Management
* Customer Lifecycle Management
* Contact Management
* Integrations and Plugins
* Reports and Dashboards

### Intelligent Marketing Automation Means:
* **Being able to make real-time, data-driven decisions** that have a significant impact on the performance of existing marketing efforts and future strategic planning.
* **Having the required information** to facilitate post-campaign performance reviews. These help you ensure that goals have been met, and if they have not been met, understand why, and how to improve future efforts.
* **Providing insight and actionable intelligence** which is invaluable for goal setting, campaign planning, and understanding of what ‘success’ looks like for you.

### Do I need to learn all of that at once?
No, Mautic is easy to learn and get started with. You can start using one part, and gradually expand what you use over time.  That’s the beauty of Mautic, it can evolve with you on this journey.

## How do I Install Mautic?
You can manually install Mautic by [downloading the latest version] [mautic download] of the marketing automation software, or through a semi-automated process offered by third party tools such as [Softaculous][softaculous], [Bitnami][bitnami], and [Digital Ocean][digital ocean].  

If you install Mautic manually, you will need to upload the Mautic package (a zip file) to your server; unzip the files, and then navigate to that location in your browser. 

You will find Mautic has a very easy to follow the on-screen installation process [here][here].

## How do I set up basic configurations in Mautic? 
Awesome! You've downloaded your marketing automation tool. That's a great first step, but now you wonder where to go from here. Follow [this][this] guide to configure using your shiny new toy!

## What are Cron jobs and how do I set up cron jobs on Mautic?
Mautic requires a few cron jobs to handle some maintenance tasks such as updating contacts or campaigns, executing campaign actions, sending emails, and more.  Without them, nothing will happen in Mautic - so you must set them up! Here is the [documentation][documentation] on how to set up the necessary cron jobs.

## Adding your Tracking Pixel
If you are using CMS platforms like Wordpress there are lots of [plugins][plugins] which make the implementation of tracking super easy. Mostly you just need to copy and paste your Mautic domain and the plugin will do the rest.

Otherwise, to enable Mautic to track website activity, you need to implement a tracking pixel. To find your tracking pixel, open Mautic and go to Settings → Configuration → Tracking settings. 


You can either use the Javascript shown above and copy that into the HTML of your website or you can just use a simple tracking pixel by replacing the domain and the path to your Mautic If you do not allow Javascript on your website. 




 [mautic download]: <https://www.mautic.org/download>
 [softaculous]: <https://www.softaculous.com/apps/others/Mautic>
 [bitnami]: <https://bitnami.com/stack/mautic/installer>
 [digital ocean]: <https://www.digitalocean.com/community/tools/mautic>
 
 [here]: <https://mauteam.org/mautic/mautic-admins/mautic-installation-in-3-simple-steps-on-a-vps/>
 [this]: <https://mautic.com/help/getting-started-mautic-cloud/>
 [documentation]: <https://docs.mautic.org/en/setup/cron-jobs>
 [plugins]: <https://www.mautic.org/marketplace>