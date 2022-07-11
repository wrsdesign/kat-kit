<?php

return [
  'arnoson.kirby-vite.outDir' => '/assets',
  'arnoson.kirby-vite.entry'  => 'app.js',

  'smartypants' => true,
  'cache' => [
    'pages' => [
      'type' => 'php',
      'active' => true
    ]
  ],
  'panel' => [
    'slug' => 'cp',
    'language' => 'ru'
  ],
  'thumbs' => [
    'format' => 'webp',
    'quality' => 80,
    'srcsets' => [
      'default' => [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    ]
  ],
  'routes' => require_once 'routes.php',
  'hooks' => require_once 'hooks.php'
];
