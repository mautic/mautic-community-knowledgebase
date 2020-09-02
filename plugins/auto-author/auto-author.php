<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use Grav\Plugin\Admin\Admin;
use RocketTheme\Toolbox\Event\Event;

/**
 * Class AutoAuthorPlugin
 * @package Grav\Plugin
 */
class AutoAuthorPlugin extends Plugin
{
    /**
     * @return array
     *
     * The getSubscribedEvents() gives the core a list of events
     *     that the plugin wants to listen to. The key of each
     *     array section is the event that the plugin listens to
     *     and the value (in the form of an array) contains the
     *     callable (or function) as well as the priority. The
     *     higher the number the higher the priority.
     */
    public static function getSubscribedEvents()
    {
        return [
            'onAdminCreatePageFrontmatter' => ['onAdminCreatePageFrontmatter', 0]
        ];
    }

    /**
     * Initialize the plugin
     *
     * @param Event $event
     */
    public function onAdminCreatePageFrontmatter(Event $event)
    {
        $header = $event['header'];
        if (!isset($header['author'])) {
            if ($this->config->get('plugins.auto-author.user')) {
                /**
                 * @var Admin $admin
                 */
                $admin = $this->grav['admin'];
                $author = $admin->user->get('fullname');

            } else {
                $author = $this->grav['config']->get('site.author.name');
            }
            $header['author'] = $author;
            $event['header'] = $header;
        }
    }
}
