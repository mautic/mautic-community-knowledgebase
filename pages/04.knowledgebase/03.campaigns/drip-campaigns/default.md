---
title: 'Drip Campaigns'
media_order: 'image1.png,image2.png'
taxonomy:
    category:
        - Campaigns
    tag:
        - Beginner
        - Article
        - Campaigns
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: true
tagtitle: h2
visible: true
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

## What is a drip campaign
Drip marketing campaigns are basically email campaigns, which sends out different emails either based on time or on user decisions. The whole idea behind a drip email campaign is that you’re going to be sending out targeted emails automatically on predefined schedules or conditions. 

With an email blast, you send to many people at one time. With a drip campaign, users receive a series of emails based on when they enter the campaign.

Drip campaigns are useful on many different occasions, such as informing a potential customer about your product or reaching out to reactivate contacts who have been inactive for a while, but of course there are many more use cases.

## Planning a Drip Campaign

First of all, you need to think about what kind of campaign your drip campaign should be and for which reason you need a drip campaign. Then you should write the emails you want to use in your drip campaign, based on the reason you defined in step one. 

As these emails are the backbone of your campaign, they should be well thought out and precisely written. The campaigns just define the order and timeframes in which the emails will be sent, but the content itself is what defines the other half of the quality a drip campaign has.


## How to create a drip campaign in Mautic

### Timebased-Campaign

![](image1.png)

Here is an example of basic time based drip campaign. This form of a drip campaign is the “easiest” to build campaign wise. The emails will be sent to everybody in our “Drip Campaign Segment”. We have no user-based conditions here, just a timeframe, so the 1st email will be sent immediately, the 2nd after 7 days and the 3rd email after 14 days. For better understanding here is an example:

Consider a user onboarding campaign. Someone signs up for a service, they get a welcome email. 2 days later, they get the first email explaining benefit A. 2 days later, another, and so on.


### User condition based Campaign

![](image2.png)

User condition based campaigns are a bit more complex but don’t worry, they are super easy to understand and recreate as well. 

This campaign starts on the left branch by sending out the email called “Email 1.1”. The next step is a condition that determines whether the contact did open the email or didn`t. If The contact opened email 1.1, then email 1.2 will be sent. But if the contact did not open email 1.1 within one day, email 1.3 will be sent instead. 

After seven days the next campaign branch will start with sending out email 2.1 and the next drip campaign branch will be sending out emails based on decisions and conditions made by the contact.
You can see that this drip campaign is built around decisions made by the contact and conditions met preemptively. Here is an example use-case:

A user signed up for a service, but didn't complete the first action (upload their first video, make a profile, etc). The user action campaign will account for this and send an appropriate email prompting them for the action