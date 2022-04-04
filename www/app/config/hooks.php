<?php

use Kirby\Filesystem\Dir;

return [
  'page.*:after' => function () {
    Dir::remove(kirby()->roots()->cache());
  },
  'site.*:after' => function () {
    Dir::remove(kirby()->roots()->cache());
  },
];
