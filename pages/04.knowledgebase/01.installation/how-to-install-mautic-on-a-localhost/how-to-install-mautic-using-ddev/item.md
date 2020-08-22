---
title: 'Installing Mautic using DDEV'
media_order: 'safar-safarov-LKsHwgzyk7c-unsplash (1).jpg'
taxonomy:
    tag:
        - installation
        - localhost
anchors:
    active: true
tagtitle: h2
hero_overlay: true
hero_showsearch: false
content:
    items:
        - '@self.children'
    limit: 12
    order:
        by: date
        dir: desc
    pagination: true
feed:
    limit: 10
twitterenable: true
twittercardoptions: summary
articleenabled: true
facebookenable: true
---

[DDEV][ddev] is an OS agnostic wrapper for Docker that makes it easy to set up PHP projects on your local machine. DDEV aims to make Docker simple and accessible to everyone. Even better, DDEV is entirely open source.

In this guide we will show you how to set up a local development environment for Mautic, using DDEV.

## Installing Docker and DDEV
Before we can get started you will need to install Docker and Docker Compose. You can find documentation on how to correctly do this [here][install-docker].

Once those are installed we can continue with installing DDEV. You can find installation instructions for Linux, MacOS and Windows [here][install-ddev].

## Installing Mautic
Clone the Mautic repository into a folder of your choice.

## Starting DDEV and configuring Mautic
Use the command line and navigate to the root of your Mautic installation. Once there, run 

`ddev config`

It will ask you for a project name - you can leave it at the default, or give it a custom name. This is really up to you. For the purposes of this guide, we will name this project mautic.

Next it will ask for the docroot of the project.

Since the index.php of Mautic is located in the root folder of the project, we can just go with the default value. Simply press enter.

After this it will ask for the project type. PHP, which we want to use, is the default choice. Simply press enter.

Everything should now be configured. We do need to make a few changes to the `.ddev/config.yaml`, though: 

Firstly, we change the default DDEV webserver to be Apache2 by changing the value of `webserver_type` to be `apache-fpm`.

Secondly, we add a required PHP module by finding the line beginning with `webimage_extra_packages`, uncommenting it and setting its value to `[php7.3-imap]`. If you need any additional modules you can set them here as well (**make sure to replace 7.3 with whatever version of PHP is set as `php_version`**).

Finally, we set the timezone to be whatever timezone we are in. Find the line that starts with `timezone`, uncomment it and set its value to the tzdata format *`"Region/City"`* corresponding to whatever timezone you are in. Wikipedia hosts a [list of valid tz values][tz-values].

> Note: if you have Apache2 or nginx running locally on your machine, and they are currently using port 80, ensure that you shut them down or change their ports before starting the DDEV instance. If you do not follow this step, starting DDEV will fail with an error message telling you that port 80 is already in use.

You can start DDEV by running 

`ddev start`

on the command line. 

If this is your first DDEV instance this can take a bit of time to initialise, as it will need to pull all the Docker containers. 

**If you cloned Mautic from GitHub, there is one final step:** You need to connect to the running DDEV container and then have [Composer][composer] install all of the Mautic dependencies. This is done by first running `ddev ssh` to connect to the container, and then from the project root (which DDEV by default connects you to), run `composer install` to install all dependencies.

Once started you will find your project at mautic.ddev.site (in case you used a different project name it will be yourprojectname.ddev.site).

Navigating there in the browser should bring up the Mautic installation. Make sure that during the installation you use the following settings:
```
Database port: 3306
Database host: db
Database user: db
Database password: db
```
You can now finish the installation process. Your local Mautic instance should be up and running!

To stop the containers, simply run 

`ddev stop` 

on the command line.

## Opening Mautic's development environment (index_dev.php)
Mautic has a development environment (index_dev.php) which shows a profiler toolbar at the bottom, shows more error details, and caches less (so you have to clear your cache less often). 

The only downside is that the development environment is designed to work on **localhost** only. Since DDEV uses Docker, which has a slightly different networking stack, we need to make a small change in the code to bypass this restriction and get index_dev.php to work on DDEV. Otherwise, when accessing `mautic.ddev.site/index_dev.php` we'll get an error saying "*You are not allowed to access this file*".

Open `app/middlewares/Dev/IpRestrictMiddleware.php` and replace this code snippet:

```
    /**
     * This check prevents access to debug front controllers
     * that are deployed by accident to production servers.
     *
     * {@inheritdoc}
     */
    public function handle(Request $request, $type = self::MASTER_REQUEST, $catch = true)
    {
        if (in_array($request->getClientIp(), $this->allowedIps)) {
            return $this->app->handle($request, $type, $catch);
        }

        return new Response('You are not allowed to access this file.', 403);
    }
```

...with this one:

```
    /**
     * This check prevents access to debug front controllers
     * that are deployed by accident to production servers.
     *
     * {@inheritdoc}
     */
    public function handle(Request $request, $type = self::MASTER_REQUEST, $catch = true)
    {
        return $this->app->handle($request, $type, $catch);
    }
```

Save the changes and you should be able to access `mautic.ddev.site/index_dev.php`

## Further useful DDEV tips and tricks
Here you can find some other useful things you might need later along the way.

### Running Mautic CLI commands
You can execute [Mautic CLI commands][cli-commands] in two ways:

The first option is executing them from **inside** of the DDEV container. You do this by first connecting to the DDEV container using SSH:

`ddev ssh` 

and then, while inside the container, type the CLI commands. For example for clearing the cache you'd type `bin/console cache:clear --env=dev`, while for triggering the campaigns update command you'd type `bin/console mautic:campaigns:update`.

Once done, simply type `exit` and press enter to return to your local machine.

The second option is executing the commands from **outside** of the DDEV container. 

If you wish to directly execute a command in the container without first using SSH to connect, you can use 

`ddev exec yourcommandhere`

Thus, from your local machine, you can type `ddev exec bin/console cache:clear --env=dev` or `ddev exec bin/console mautic:campaigns:update` to get the same results as if you first connected to the container with SSH and then ran them directly.

### Using DDEV with HTTPS
You can run your local Mautic installation over HTTPS by generating a locally-trusted development certificate for your local machine and then pushing it to ddev-global-cache. This is done by the mkcert package.

First install mkcert - it is available for Linux, MacOS and Windows as described [on the GitHub page][mkcert].

After installing mkcert, simply run `mkcert -install` to create and save a certificate for your local machine. If your browser is open, you may need to restart it for the changes to take effect.

That's it! Next time you start your DDEV with `ddev start`, the certificate should automatically get pushed to ddev-global-cache, and you should be able to access your local Mautic installation by visiting https://mautic.ddev.site

### Using Xdebug
You can use 

`ddev exec enable_xdebug`

and 

`ddev exec disable_xdebug`

respectively to turn Xdebug on and off.

### Changing PHP versions
Navigate to `.ddev/config.yaml` and edit the parameter called `php_version`. **(Be sure to also change the version number on any additional packages you have set on the line `webimage_extra_packages`)**. Once that is saved, run 

`ddev restart`

to implement the change.

### Using PHPMyAdmin
A DDEV instance comes with PHPMyAdmin by default. To find out the location of the PHPMyAdmin instance of the current project, use 

`ddev describe`

This will give you a lot of information about your containers, including the URL to the PHPMyAdmin instance.

[ddev]: (https://github.com/drud/ddev)
[install-docker]: (https://ddev.readthedocs.io/en/stable/users/docker_installation/)
[install-ddev]: (https://ddev.readthedocs.io/en/stable/#installation)
[tz-values]: (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
[composer]: (https://getcomposer.org)
[cli-commands]: (https://docs.mautic.org/en/troubleshooting/command-line-tools-cli)
[mkcert]: (https://github.com/FiloSottile/mkcert)