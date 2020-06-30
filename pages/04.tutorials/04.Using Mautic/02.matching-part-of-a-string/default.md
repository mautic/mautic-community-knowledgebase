---
title: 'Matching part of a string'
anchors:
    active: false
tagtitle: h2
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

## Matching part of a string
There are 5 filters you can use for matching part of a string 

* starts with
* ends with
* contains
* like
* regexp

The first three filters (starts with, ends with, contains) match strings as you enter it. The ‘like’ filter is for advanced users - you can specify which type you want to use with % character:

* ** My string%** is the same as **starts with** filter with **My string** value.
* **%My string** is the same as **ends with** filter with **My string** value.
* **%My string%** is the same as **contains** filter with **My string** value.
* **My string** is the same as **contains** filter with **My string** value.

A few notes for text filters:

* A % character in the middle of the string has no special meaning. When using the ‘contains’ filter with my % string Mautic will search for a string with % in the middle. The same is true for the ‘like’ filter with %my % string% value. There is no need to escape this character.

* Mautic searches for % character in a value for the like filter and no modification is performed if at least 1 % is found.

You can use regular expressions in a regexp filter. Mautic recognises all common operators like | for OR (first string|second string), character sets ([0-9], [a-z0-9] etc.), repetitions (+, *, ?) and more. 
You have to escape special characters with \ if you want to use them as matching characters. 

For more information about Regex: **[Learn more about regex here!](https://dev.mysql.com/doc/refman/5.7/en/regexp.html)**
