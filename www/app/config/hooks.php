<?php

use Kirby\Filesystem\Dir;

return [
  'page.update:after' => function () {
    Dir::remove(kirby()->roots()->cache());
  },
  'site.update:after' => function () {
    Dir::remove(kirby()->roots()->cache());
  },
];
