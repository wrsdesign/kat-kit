<!DOCTYPE html>
<html lang="<?= $kirby->languageCode() ?>">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?= snippet('site/seo') ?>
  <?= snippet('site/icons') ?>
  
  <script
    src="https://unpkg.com/quicklink@2.2.0/dist/quicklink.umd.js"
    async
    onload="quicklink.listen({ throttle: 2 })"
  ></script>

  <style>
    [x-cloak] { opacity: 0 !important; }
    img:not([src]):not([srcset]) { visibility: hidden !important; }
  </style>
  
  <?= vite()->client() ?>
  <?= vite()->css() ?>
  <?= vite()->js() ?>

  <?php if (!option('debug') and $site->scrips_head()->isNotEmpty()) : ?>
    <?= $site->scrips_head() ?>
  <?php endif; ?>
</head>

<body>
