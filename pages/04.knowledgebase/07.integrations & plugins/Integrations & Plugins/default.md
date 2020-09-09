---
title: ' How to integrate Mautic with Salesforce'
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: false
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

# Mautic - Salesforce Integration

This article describes how to set up the integration between Salesforce and Mautic, including how to configure the integration to pass **Mautic Activities into SalesForce** and some **Recommendations & Best Practices**. This integration leverages the REST API and the only Salesforce editions that enable APIs are:
* Enterprise Edition
* Unlimited Edition
* Developer Edition
* Performance Edition
If your Salesforce account is not one of the above, please contact Mautic support or your Salesforce rep to learn about upgrade options.
If you have one of the Salesforce Editions listed above, please follow the steps below to enable the plugin

## Steps on how to enable the Mautic Salesforce plugin
1. Get the Salesforce credentials
(Here is the official documentation about how to get the key and secret.)

* Go to: Setup (top right corner) / Build (bottom left corner) – Create / Apps / Connected Apps / New
*  Create a new app to look like this:
Make sure the Selected OAuth Scopes are Access and manage your data (API) and Perform requests on your behalf at any time (refresh_token, offline_access).
* Copy the Consumer Key and Secret.

2. Configure the Mautic Salesforce plugin

* Insert the keys to the Mautic Salesforce plugin and authorize it.
*  Configure the field mapping.  All the required fields in the SalesForce Contact Object and Lead Object should map to Mautic Core Email, Last Name and Company Fields, as shown below:
*  Any custom lead fields in Salesforce must be created in Mautic as custom fields in the contact object.

#### Features Tab within the plugin
* Enabled features: You can pull leads and/or push leads to and from the integration.
* “Triggered action push to integration” can only be done through a form or a campaign.
* “Pull leads” is done via API.
* “Push contacts to this integration” is done through API sync that takes place every 8-10 minutes.
* Feature specific settings: Select the objects you wish to pull or push records from. You can push contacts to the Leads object in salesforce. You can also push activities (contact’s timeline records) to a custom object in salesforce
* Pulling records will be done from Leads and/or Contacts objects in Salesforce.

#### Setting up Mautic’s Activities in Salesforce
You have two options with the Salesforce integration to push Mautic activities into Salesforce. One option is to pass the activities into a custom object that allows the activities to be reportable. The other way is to set up a custom URL field in Salesforce and then Mautic will insert a contact’s timeline link.
**Option 1:** Make activities reportable – you first need to set up a custom object in your Salesforce instance. Please set up the object as it is described below
**Step 1:** On the initial screen of creating a custom object, make sure the Label field is populated with the value “Timeline” and the Object Name is “mautic_timeline”. This will auto-populate a few fields and then you have the option to populate other fields that haven’t pre-populated with values that relate to your business or this object. These additional fields do not impact the activities.

.

