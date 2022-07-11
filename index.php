<?php

include 'kirby/bootstrap.php';

$kirby = new \Kirby\Cms\App([
  'roots' => [
    'index'    => __DIR__,
    'base'     => __DIR__,
    'site'     => __DIR__ . '/app',
    // Storage
    // --------------------------------------------------------------------------------------------
    'storage'  => $storage = __DIR__ . '/storage',
    'content'  => $storage . '/content',
    'cache'    => $storage . '/cache',
    'logs'     => $storage . '/logs',
    'media'    => $storage . '/media',
    'sessions' => $storage . '/sessions'
  ]
]);

if (!file_exists(__DIR__ . '/media')) {
  symlink($kirby->roots()->media(), __DIR__ . '/media');
}

echo $kirby->render();
