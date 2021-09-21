<?php

include __DIR__ . '/../kirby/bootstrap.php';

$kirby = new \Kirby\Cms\App([
  'roots' => [
    'index'       => __DIR__,
    'base'        => $base    = dirname(__DIR__),
    'site'        => $app     = $base . '/app',
    'storage'     => $storage = $base . '/storage',
    'content'     => $storage . '/content',
    'accounts'    => $storage . '/accounts',
    'cache'       => $storage . '/cache',
    'logs'        => $storage . '/logs',
    'media'       => $storage . '/media',
    'sessions'    => $storage . '/sessions'
  ]
]);

$symlink = __DIR__ . '/media';
if (!file_exists($symlink)) {
  symlink($kirby->roots()->media(), $symlink);
}

echo $kirby->render();
