---
title: 'Javascript Email Validation Tutorial'
published: true
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: false
tagtitle: h2
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

Validation is a method to constantly check, verify, authenticate and prove the accuracy of something._ Email Validation_ is a method to check, authenticate and prove the accuracy and validity of emails. Emails is one of the most convenient and popular means of communication used by a lot of people - the need to validate emails is very important as it is: 
1. Improve the quality of data; By validating emails, you can ascertain the accuracy of data as only accurate and valid emails are collected, a large amount of invalid email addresses means there is a lot to improve.
2. Improves email marketing: Validation of emails improves email marketing as only deliverable emails are being targeted when sending emails out.
3. Leads to increased deliverability: When emails are validated you don’t get to deal with issues that arise with sending out incorrect or invalid emails such as high spam complaint rate.
4. Prevents email hard bounce: Email bounces occur when the recipient email address is not correct or the email does not exist. Email validation cleans up the list of emails and removes invalid or incorrect emails.
5. Improves sender's reputation: Validating emails eliminate roadblocks such as incorrect or mistyped emails that may hinder great sender reputations.
6. Saves money: Sending emails out cost money, email validation eliminates unwanted emails leaving only relevant emails and thereby reducing expenses.

Emails can be validated using different methods such as [sending emails using java][java], using javascript to validate email addresses etc. 
 For this article, we would look into how we can set up javascript to validate email addresses on the client-side, it is very fast and a preferred choice by most people, we would see how this can be done in the following sections.
 
## What are the guidelines that should be observed by email validation?
When performing email validation it is very important you take into consideration the email structure. This is an important rule that should be observed. Emails have two parts that are separated by this `_@`_ symbol. The two parts are called local and domain parts respectively. 
The first part which is the local part usually consists of:
* Capital letters (A-Z) and small (a-z) letters
* Numerals (0-9)
* Some special characters which are:! # $ % & ‘ * + – / = ? ^ _ ` { | ~
* . ( period, dot or full stop) which cannot be the first or last character and cannot be repeated
The second part which is the domain part consists of:
* Capital letters (A-Z) and small (a-z) letters
* Numerals (0-9)
* “.” and “-” dot and hyphens
##  How to use Regex



[java]: <https://blog.mailtrap.io/sending-email-using-java/>