---
title: 'Mautic Landing Pages'
media_order: 'LP-Themes.png,LP-Sidebar.png,LP-Builder-1.png,LP-Text-Slot.png,Image-options.jpg,Sections.jpg,Section-Editor.jpg,Images.jpg,Image-Card.jpg,Image-Caption.jpg,1280_2mgcl82HyOO2.png,Button.jpg,Code-Mode.jpg,Separator.jpg,LP-Gated-Video.png,LP-DWC-Slot.png'
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

Landing pages are a powerful feature that enable you to do more than just publish content quickly and easily. Using landing pages can give you insight to what kind of content your contacts are interested.


## Why do we use Landing pages in Mautic
* It give you insight to what kind of content interest your contacts
* It can help you obtain more information about your contacts.

## Basics of landing pages
### Themes
![](LP-Themes.png)

Campaign Studio includes several themes out of the box. These themes are editable. You can choose your own colors, images, styles, and more. Some of themes are available for a combination of emails, landing pages, and form styling.

The Fresh themes are created specifically for landing pages, with specific areas designed to contain forms. You can create a custom theme, making branding more consistent with less effort on each new landing page. To start creating your own custom theme(s), see [Theme Directory Structure][Theme Directory Structure]. Users may also select the Code Mode theme to create landing pages entirely in HTML.

> Note: Once you’ve built a landing page, changing the theme will delete the content. Its recommended you create a new landing page with the new theme, then recreate your content to avoid loss of content.

### Sidebar options
![](LP-Sidebar.png)

* **Title:** The name displayed in your lists of landing pages, either on the item page or in the tokens menu in case you’d like to add a link to a particular page in an email. It is recommended to have a naming convention for your landing pages. Naming conventions keep your list organized and help team members find pages.
* **Alias**:  A machine name, which becomes the slug in the URL of the page. For example, you may title a landing page something like `WR: Mautic`, where the `WR: stands for Webinar Registration`. The alias can be something like webinar-mautic. When set, the URL becomes [https://subdomain.yourcompany.com/webinar-mautic][https://subdomain.yourcompany.com/webinar-mautic] when a person goes to the page.
* **Category:** Organize your landing pages based on their goals, campaigns, etc. 
* **Language & Is a translation of:** If contacts in multiple countries will be visiting your landing pages, Campaign Studio can identify those countries and display content in the appropriate languages. You must create the content for each of those languages. Select the language you’re building the page in and the main page you’re translating. For example, if you primarily use English, you can create a French version which appears when someone visits the page from France. Create the English version and label it as English, then create the French version. Add the French label, and select the English version in the Is a translation of box.
* **Publish options:** The Yes/No toggle is the fastest way to publish or unpublish a page. If it’s unpublished, any contacts who visit the URL will see either an error page or will be redirected to a different URL (see Redirect type). Set the beginning, end, or both dates & times for the period you’d like the page to be active. This helps control relevance, and prevents users from needing to manually publish or unpublish pages at the right times.
* **Preference center**: Users can create custom Preference Center pages in line with their branding than the default preferences.  To turn a page into a Preference Center page, select Yes.
* **Redirect type**: If the content on your landing page is out of date, you can unpublish your landing page and still have contacts who find it go to a relevant page of your choice. If a contact finds an old post or email with a link to a landing page, instead of seeing an Oops! page, you can send users to a specific page. Typically, you’ll want to use a 301 permanent redirect.
* **Disable search indexing:** To prevent a landing page displaying in search results toggle the switch to Yes. To keep your page available for search engines to find, leave the setting at No (default).
* **Meta Description:** Adding a meta description is a best practice for SEO. Search engines display this snippet with the results, as a description the page content.

![](LP-Builder-1.png)
### Slot Types
* **Text**: Text slots are the most versatile slot type in the landing page builder. You can do almost anything in a text box. Once you have a text slot in your landing page, select the slot to see WYSIWYG editor on the right side.
![](LP-Text-Slot.png)
Inside the dialog box are formatting options. The icons displayed (left to right, top to bottom ) are: undo, redo, bold, italics, underline, paragraph format (based on the theme you’re using), font family, font size, color (text and background options available once you click the droplet icon), alignment, numbered list, bulleted list, quote format (indentation), clear formatting, token menu, insert link, insert image, insert video, insert table, code mode, and view full screen.

To add a focus item or form to the landing page, use the tokens:
* {focus=id#}
* {form=id#}

Replace id# with the ID number for the item you’re trying to insert. Assets and Dynamic web content are a little different in text slots. To add a link to an asset:
1. Use { and start typing the name of the asset.
2. For dynamic web content, use {dwc=slot_name}. Find the slot name in the Dynamic Web Content item type under Components.
3. Complete the token with }.
Text slots offer more flexibility for images than the Image slot. Users often add images into text slots, with or without text. When you click the Image button, options display:
![](Image-options.jpg)

From left to right, the icons are:
* Upload an image.
* Use a URL of an image.
* Opens the file manager to use an image previously uploaded.
Using the video option enables you to include gated video within a text slot on the landing page. If you don’t want to gate the video, paste in the URL of the video you want to use. If you do want it gated, enter the time to wait before a form appears and the form to use. Be sure to test the gate, as limited space causes forms to display differently in a video than they would on landing pages.

To make more advanced changes, you use code mode within a text slot. Adjusting colors to specific HEX codes, paragraph styles and formatting, and creating buttons are the most common uses for code mode in a text slot. When finished making changes in code mode, click the `</>` icon again to return to normal view before saving. Otherwise, your changes won’t apply.
* **Image**: After dragging in an image slot, click the placeholder box to display options for the image.

![](Images.jpg)

The display option icons are:

* Replace: Use to add your image initially, or to change it later on.
* Alignment: You have alignment options to the right of the preview window, in the Customize Slot section.
* icon: Use to add alternate text to an image. Typically, using whatever you’d name the image will do.
* Adjust the size: Set the width and height by number of pixels.
* Add hyperlink: To have the image act as a hyperlink, use the link icon and add your URL. Like you would when adding a text link, you have the option to open the link in a new tab.
* **Image Card**

![](Image-Card.jpg)

Image cards are like the Image slot type. The Customize Slot section in the editor panel (on the right) has more options. There, you can change the text for the caption, change alignment for the image and caption, and change colors for the image background, caption background, and caption text.

Click the Blank placeholder box to find the options to add or replace the image, like in the Image slot.

* **Image+Caption**

![](Image-Caption.jpg)

A third image slot type, the only difference between this and the Image Card is background colors. The Image+Caption slot type doesn’t include backgrounds.

* **Button**

![](Button.jpg)

Marketers often want to have a call to action on their landing page and drive recipients to a certain page. The Button slot type is the most straightforward way to do that. The Customize Slot area in the editor on the right gives options to:

change the border radius (curved edges instead of straight).
add custom text and a link, size, position, and colors for the button and text.
If you have a form on your page you won’t need a separate button. Style the submit button for the form in Campaign Studio’s form builder.

* **Social Share**

This slot type adds options to share your content on Facebook, LinkedIn, and Twitter. The basic token for {sharebuttons} adds share buttons for those three social media platforms. You may also add the token into a text slot.

* **Social Follow**

![](1280_2mgcl82HyOO2.png)

With this slot type, you can add links to follow your organization’s Google+, Facebook, and Twitter pages. Add the links for the social profiles to link to.

* **Code Mode**

![](Code-Mode.jpg)

To create a slot entirely in HTML, drag in a Code mode slot and write your code in the editor. Changes display in the main preview panel.

* **Separator**

![](Separator.jpg)

A basic design element, the separator is a line which separates parts of your landing page.

* **Gated Video**

![](LP-Gated-Video.png)

Using gated video on a landing page is a great way to gather more information about your contacts. Add a form at a specified time in the video to require a contact to identify themselves or give more information. Once the form displays, the contact can’t continue watching the video until they have submitted the form.

* Video URL: Add a URL from YouTube, Wistia, or other URL of a video file.
* Gate Time: The amount of time (in seconds) after the video starts you’d like the form to display.
* Form: The Campaign Studio form you’d like to use in your gated video.
* Width and Height: The amount of space you’d like the video to consume on your page.
* Padding Top and Bottom: The amount of extra space you’d like you leave around the video and any other surrounding content.

* **Dynamic Content**

Dynamic web content is a great way to personalize the experience for your contacts. See Dynamic web content. To add a dynamic content slot to your landing page, create the slot(s) in the Dynamic Content item (under Components) and add the Requested Slot Name here.
![](LP-DWC-Slot.png)


## Sections
![](Sections.jpg)
Sections are the areas containing one or more slots. You can add sections with up to three columns, and have multiple slots within each section or column. In the Customize Section editor, you’ll see a handful of options.
![](Section-Editor.jpg)

* **Content Background Color** is for the background within the area where you have content.
* **Wrapper Background Color** is for the rest of the background, extending to the edges of the page.
* **Wrapper Background Image** To add a background wrapper image, enter the URL of the image.
* **Wrapper Background Repeat** Select a value to declare if or how the wrapper repeats.
* **Wrapper Background Size** enables you to decide how large the wrapper is. If you want to have some space before, after, or around the edges of the content, set those dimensions here.








[Theme Directory Structure]: <https://developer.mautic.org/#themes>
[https://subdomain.yourcompany.com/webinar-mautic]: <https://subdomain.yourcompany.com/webinar-mautic>