# Auto Author Plugin

The **Auto Author** Plugin is for [Grav CMS](http://github.com/getgrav/grav). Automatically adds an author to frontmatter when creating a new page via Grav Admin plugin.

## Usage

Whenever you create a new page via the admin plugin, an author will be automatically inserted in the frontmatter of the page. The author name is dependent on the configuration. It can be the author name from `site.yaml` or the fullname of the current admin user. 

```
user/pages/02.my-new-page/default.md
---
title: 'My new page'
author: 'Joe Bloggs'
---
```

## Installation

Installing the Auto Author plugin can be done in one of two ways. The GPM (Grav Package Manager) installation method enables you to quickly and easily install the plugin with a simple terminal command, while the manual method enables you to do so via a zip file.

### GPM Installation (Preferred)

The simplest way to install this plugin is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install auto-author

This will install the Auto Author plugin into your `/user/plugins` directory within Grav. Its files can be found under `/your/site/grav/user/plugins/auto-author`.

### Manual Installation

To install this plugin, just download the zip version of this repository and unzip it under `/your/site/grav/user/plugins`. Then, rename the folder to `auto-author`. You can find these files on [GitHub](https://github.com/-sven-sanzenbacher/grav-plugin-auto-author) or via [GetGrav.org](http://getgrav.org/downloads/plugins#extras).

You should now have all the plugin files under

    /your/site/grav/user/plugins/auto-author
	
> NOTE: This plugin is a modular component for Grav which requires [Grav](http://github.com/getgrav/grav) and the [Error](https://github.com/getgrav/grav-plugin-error) and [Problems](https://github.com/getgrav/grav-plugin-problems) to operate.

## Configuration

Before configuring this plugin, you should copy the `user/plugins/auto-author/auto-author.yaml` to `user/config/plugins/auto-author.yaml` and only edit that copy.

Here is the default configuration and an explanation of available options:

```yaml
# enables or disables the plugin
enabled: true
# true = use current admin user (fullname) or false = use site author name (default)
user: false
```

## License

The MIT License (MIT)

Copyright (c) 2015 Sven Sanzenbacher

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
