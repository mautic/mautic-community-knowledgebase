---
title: 'What is Mautic''s API?'
media_order: 'Screenshot 2020-08-01 at 1.06.20 AM.png,basic.png,Screenshot 2020-08-01 at 1.32.29 AM.png,Screenshot 2020-08-01 at 1.34.38 AM.png'
taxonomy:
    category:
        - FAQ
    tag:
        - FAQ
        - Intermediate
        - 'Mautic API'
        - dev
        - Developer
body_classes: 'title-h1h2 header-fixed header-animated'
anchors:
    active: true
tagtitle: h2
twitterenable: true
twittercardoptions: summary
articleenabled: false
facebookenable: true
---

##  Mautic API

Mautic has a great API to interact with other systems. The REST API serves as a powerful gateway to the Mautic system. It supports an ample amount of calls allowing users to programmatically create, read, delete, and modify different components within Mautic.
The Mautic API requires OAuth (1a or 2) authentication. The API can be used to:
* Build meaningful integrations with in-house systems – CRM, ERP, social, and more.
* Batch update Mautic components.
* Create advanced triggers and alerts.
* Achieve the valuable use case that you envision.

This guide allows you to quickly communicate with the Mautic API. For full API documentation, please refer to [developer-docs][developer-docs]

##  How to Use the Mautic Rest API  

Here are the basic steps to getting started with the Mautic API.

1.  Install the Mautic API 
* **With Composer**: API library is at Packagist. composer require mautic/api-library command will install the library to your project for you. Composer will also automatically include the library to your project.
* **Install by git clone**: Go to your project folder where you want to place the Mautic API library.  For example:
 cd /var/www/html/myproject.  Run git clone to this folder: git clone [mautic-api-library][mautic-api-library]
* **Copy from ZIP package**: Download the library from [mautic-api-library-zip][mautic-api-library-zip]. Extract the package to some temporary location. Copy the /lib folder to your project.

2. Mautic Setup
To enable the API in Mautic, follow these steps:
* Go to the Configuration page (located in the Settings menu), and under API Settings enable Mautic's API. 
![](Screenshot%202020-08-01%20at%201.06.20%20AM.png)
* If you intend on using Basic Authentication, ensure you enable it. You can also choose which OAuth protocol to use here.
![](basic.png)
* After saving the configuration, go to the API Credentials page (located in the Settings menu).
![](Screenshot%202020-08-01%20at%201.32.29%20AM.png)
* Create a new client. Enter the callback/redirect URI that the request will be sent from.
 ![](Screenshot%202020-08-01%20at%201.34.38%20AM.png)
* Click Apply then copy the Client ID and Client Secret to the application that will be using the API.

3. Authorization
Mautic supports OAuth 1.0a and OAuth 2 however it is up to the administrator to decide which is enabled. Thus it is best to have a configuration option within your project for the administrator to choose what method should be used by your code. For full documentation on authorization, please refer to [developer-docs][developer-docs].

If you don't want to hard-code authorization details then you can create a form with the following text inputs: Mautic Base URL, Consumer Key and Consumer Secret with Save & Authorize button. This form should not be accessible to the public.
**Note**:You can test authorization and API requests in build-in API Tester. You can find it in the /apitester directory of the Mautic API Library.

4. Endpoints
The base format for the http request URL is: https://your-mautic.com/api/[[request-extension]].
Mautic generally supports GET, POST, DELETE, PATCH, and PUT requests which can be examined in more detail in the API documentation. Successful responses are returned in JSON format.

5. Making API Calls
Now that we have authentication and the API request URL, let’s talk to the Mautic API!.
This query returns the profile data of an individual Mautic contact: GET https://your-mautic.com/api/contacts/[[contact-id]]. 
Choose your preferred environment below and use the code snippets as guides for sending your first Mautic query. Change the [[contact-id]] to the ID of the Mautic contact you want to view also update your [[username]] and [[password]]




Curl
```
curl -X GET https://your-mautic.com/api/contacts/[[contact-id]] -u [[username]]:[[password]

```

PHP
```
<?php
use Mautic\MauticApi;
use Mautic\Auth\ApiAuth;

// ...
$initAuth   = new ApiAuth();
$auth       = $initAuth->newAuth($settings);
$apiUrl     = "https://your-mautic.com";
$api        = new MauticApi();
$contactApi = $api->newApi("contacts", $auth, $apiUrl);
$contact = $contactApi->get($[[contact-id]]);
```

Python
```
import requests
 
url = 'https://[[your-mautic.com]]/api/contacts/[[contact-id]]'
payload = ""
headers = {'Accept': "application/json"}
 
r = requests.request("GET", url, data=payload, auth=('[[username]]','[[password]'))
 
print(r.text)
```

Node.js
```
var request = require('request');
var username = "[[username]]";
var password = "[[password]]";
var auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");

var options = {
url: 'https://[[your-mautic.com]]/api/contacts/[[contact-id]]',
headers: {
"Authorization": auth
}
};
request(options, function (error, response, body) {
if (error) throw new Error(error);
console.log(body);
});
```

Ruby
```
require 'uri'
require 'net/http'
require 'openssl'
uri = URI.parse("https://[[your-mautic.com]/api/contacts/[[contact-id]]")

request = Net::HTTP::Get.new(uri)
request.basic_auth '[[username]]','[[password]]'
request.content_type = "application/json"
req_options = {
use_ssl: uri.scheme == "https",
}
response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
http.request(request)
end
puts response.body
```

[developer-docs]: <https://developer.mautic.org/#rest-api>
[mautic-api-library]: <https://github.com/mautic/api-library.git>
[mautic-api-library-zip]: <https://github.com/mautic/api-library/archive/master.zip>
[contact-id]: <https://your-mautic.com/api/contacts/[[contact-id]]>
[request-extension]: <https://your-mautic.com/api/[[request-extension]]>