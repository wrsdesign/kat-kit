
<title><?= h($page->meta_title()->or($site->meta_title())) ?></title>
<meta name="description" content="<?= h($page->meta_description()->or($site->meta_description())) ?>">

<meta name="robots" content="index,follow">

<meta property="og:type" content="website">
<meta property="og:title" content="<?= h($page->og_title()->or($site->og_title())) ?>">
<meta property="og:description" content="<?= h($page->og_description()->or($site->og_description())) ?>">
<meta property="og:url" content="<?= $page->url() ?>">
<meta property="og:site_name" content="<?= h($page->og_site()->or($site->og_site())) ?>">
<?php if ($img = $page->og_image()->toFile() ?? $site->og_image()->toFile() ?? null): ?>
<meta property="og:image" content="<?= $img->url() ?>">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<?php endif; ?>

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?= h($page->og_title()->or($site->og_title())) ?>">
<meta name="twitter:description" content="<?= h($page->og_description()->or($site->og_description())) ?>">
<?php if ($img = $page->og_image()->toFile() ?? $site->og_image()->toFile() ?? null): ?>
<meta name="twitter:image" content="<?= $img->url() ?>">
<?php endif; ?>
