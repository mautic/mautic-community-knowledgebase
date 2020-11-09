---
title: 'How to install Mautic on a localhost'
media_order: home-office-336377_1920.jpg
taxonomy:
    category:
        - Installation
    tag:
        - Intermediate
        - installation
        - localhost
        - dev
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
hero_showsearch: '0'
content:
    items: '- ''@self.children'''
    limit: '12'
    order:
        by: date
        dir: desc
    pagination: '1'
    url_taxonomy_filters: '1'
feed:
    limit: 10
---

This article will guide you through setting up Mautic locally for use and for development.
## Setting up your local environment
A basic knowledge of Terminal is good, although you should be able to follow along, as the commands are all fairly simple. They are mainly to get the prerequisite components installed and running.

##### 1. Install Git
Mautic uses Git as a version control system. Download and install git for your OS from [Git-download][git].

If you already have Git installed, you can get the latest development version via Git itself:

```
git clone https://github.com/git/git

```
##### 2. Install AMPPS package
AMPPS is an easy to install software stack of Apache, Mysql, PHP, Perl, Python and Softaculous auto-installer that can be used on Desktops and office servers. 

You can easily run AMPPS locally on Windows, Linux and Mac OS X by downloading it from [here][ampps download] and following the instructions relevant to your operating system to [Install Ampps][ampps install]. 

##### 3. Install Composer
Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. There are two ways to install Composer `locally` as part of your project, or `globally` as a system wide executable.

You can easily download and install composer on Windows, Linux and Mac OS X by downloading it from [here][composer] 
##### 4. Install NPM.
NPM is the package manager for the Node JavaScript platform. npm is installed with Node.js. You can easily download and install composer on Windows, Linux and Mac OS X by downloading it from [here][npm].

##### 5. Install Grunt.
Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file. You can install grunt by running the following command via terminal.

```
npm i grunt
```

## Installing Mautic Locally
 After installing the development / build process required,we would install Mautic locally on our system by following these steps: 
   
   Note: To use Mautic you will need to set up a web server for example; Apache HTTP Server,Nginx Web Server.
   
1. Open a Terminal/Console window.
2. Change directory to the server root (i.e. `cd /var/www` if your local server root is at /var/www).
3. Clone the repository (git clone [https://github.com/mautic/mautic.git](https://github.com/mautic/mautic.git))
4. The mautic directory should appear in the server root. Change directory to mautic directory `cd mautic`.
5. Install dependencies `composer install`.
6. Visit Mautic in a browser at [http://localhost/mautic](http://localhost/mautic) and follow onscreen installation steps.

## Development environment
Mautic downloaded from GitHub has the development environment. You can access it by adding `index_dev.php` after the Mautic URL. 

Eg. [http://localhost/mautic/index_dev.php/s/](http://localhost/mautic/index_dev.php/s). Or in case of CLI commands, add `--env=dev` attribute to it.

This development environment will display the PHP errors, warnings and notices directly as the output so you don't have to open the log to see them. It will also load for example translations without cache, so every change you make will be visible without clearing it. The only changes which require clearing the cache are in the `config.php` files.

In case of assets like JS, CSS, the source files are loaded instead of concatenated, minified files. This way the changes in those files will be directly visible on refresh. If you'd wanted to see the change in the production environment, you'd have to have run the `app/console mautic:assets:generate` command.

In many cases, the CSS files are built from LESS files. To compile the changes in the LESS files, run grunt compile-less command.


## Keeping Up-To-Date
Source Files
Each time you update Mautic's source after the initial setup/installation via a new checkout, download, git pull, etc; you will need to clear the cache. To do so, run the following command:
```
$ cd /your/mautic/directory
$ php bin/console cache:clear
```
**Note**: that if you are accessing Mautic through the dev environment via `index_dev.php`, you would need to add ` --env=dev` to the command).

[git]:<https://git-scm.com/downloads>
[ampps download]: <http://www.ampps.com/downloads>
[ampps install]: <http://www.ampps.com/wiki/Main_Page>
[composer]: <https://getcomposer.org/doc/00-intro.md>
[npm]: <https://www.npmjs.com/get-npm>