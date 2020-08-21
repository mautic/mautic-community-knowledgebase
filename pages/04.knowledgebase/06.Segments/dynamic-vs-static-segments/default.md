---
title: 'Dynamic vs. Static Segments'
media_order: 'My Post (2).jpg'
taxonomy:
    tag:
        - Segments
        - Intermediate
        - Article
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: false
tagtitle: h2
visible: true
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

## Static vs. Dynamic Segments

In Mautic you can differentiate between static and dynamic segments. In this knowledge base article you will find a brief overview of the different characteristics of each type.

## Static Segments
Static segments are not filter-based. Adding contacts to a segment must be done in one of the following three ways:

* Manually moving contacts
* Using an Action in a Campaign, Form Submit Action, or Point Trigger Event
* Uploading contacts via CSV file directly into a Segment

## Manually Moving Contacts
### For batch updating contacts:
1. Use search filters in the contacts section of Mautic to find the contacts you want to modify
2. Check the boxes next to those contacts
3. Click on the green drop-down arrow that appears at the top of the column
4. Select “Change Segments” from the list
5. Choose the segment(s) you’d like to add the contacts to and/or remove contacts from
6. Click Save

### For individual contacts:
1. Navigate to the contact record you want to change
2. Click the drop-down arrow, next to “Edit/Send Email/Close”
3. Select Preferences
4. Click on the Segments tab
5. Choose the segment(s) you’d like to add the contacts to and/or remove contacts from
6. Click Save


## Campaign Action
Inside a campaign, you can add contacts to or remove contacts from segments using the “Modify contact’s segment” action. In order to add contacts to a segment, you must have already created the segment and set it to Public Segment = Yes.

1. Within the campaign builder, click on a connector
2. Select “Action”
3. From the drop-down list of actions, select “Modify contact’s segment”
4. Choose from the list of existing segments that you want to add/remove your contact from
5. Save and close

## Form Submit Action
“Modifying contact’s segments” is available as a submit action on Standalone forms. With a Campaign form, you’d create a campaign with a “Modify contact’s segment” action.

1. Click on the “Actions” tab
2. From the”Add new submit action” drop-down list, “Add new submit action” select “Modify contact’s segments”
3. Title the submit action and add a description (optional)
4. Select the segment(s) you’d like to add/remove the contact from
5. Click Add

## Point Trigger
Once a contact has accrued an assigned number of points, you’re able to automatically add them to a segment. You may want this to be a segment for your most engaged contacts who become eligible for special offers, or a segment that your sales team reviews regularly to find potentially hot prospects.

1. In the Points section of the platform, select Manage Triggers
2. Click +New
3. Give your Trigger a name and description
4. Enter the number of points as the minimum for a contact to be added to your segment
5. Determine if you’d like to add all contacts with at least that number of points to the segment
6. If you only want to add new contacts who reach that threshold to this segment, leave switch set to “No”
7. To add all existing contacts with at least a certain number of points to the segment, switch to “Yes”
8. In the Events tab, click the drop-down for “Add an event” and select “Modify contact’s segments”
9. Title the event and add a description (optional)
10. Select the segment(s) you’d like to add/remove the contact from
11. Click Add, then Save & Close

This accomplishes the same thing as creating a Dynamic segment with a filter for Points, operator greater than (or equal to), and the minimum number of points. The only difference is that if you only want to add contacts to a segment who reach the point value after creating this trigger to a segment, you have that option.

## CSV Upload
If you have a list outside of Mautic, for example in an Excel, Google, or Numbers sheet, you can upload that list directly into a Mautic segment.

**Note: You’ll need to create your segment first**

1. Click into the Contact section of the platform
2. Click on the drop-down arrow in the upper-right hand corner and select, “Import”
3. Make sure your file is in a UTF-8 CSV format. Select your file then click “Upload”
4. At the top of the next screen, you can select the segment you want to add the contacts into
5. Map the appropriate fields from the file (Remember to always map the unique identifier, so you don’t create duplicates)
6. Click Import

If your file is larger than 1,000 rows than the system will change screens and inform you once the file has uploaded.

Once the contacts have been uploaded, click over to the Segments section of the platform and see your contacts added.


## Dynamic Segments
Contacts move into and out of dynamic segments automatically based on the filters applied to the segment. As updates happen to the data associated with the contact, including company associations and behaviors, Mautic updates segment membership accordingly.

Mautic will dynamically move your contacts to/from segments based on filters. You can filter on contact fields, company fields and even actions, such as emails sent or read.

1. Create a new segment by clicking on the +New button
2. Add a name and description to your segment in the Details tab
3. Click on the Filters tab to add filters
4. Click on the “Choose one…” dropdown and search for the field you’d like to segment by. Fields are broken up into three (3) sections:
5. Contact fields
6. Fields must be set to Available for Segments = Yes in your Custom Field manager to appear here
7. Contact behavior and actions
8. Primary company fields
9. Fields must be set to Available for Segments = Yes in your Custom Field manager to appear here
10. Contacts may be associated with multiple companies, but Mautic will add them to segments based on fields for the primary company
11. Add more filters, using and/or operator, if you’d like
12. An “Or” operator creates a new group of filters that can include “And” operators
13. Save and close


### And example on how to do this is given here: “[How to work with Segments](https://kb.mautic.org/tutorials/how%20to%20use%20mautic/segments)”