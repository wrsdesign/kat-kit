<?php

Kirby\Cms\App::plugin('kat-kit/utils', [
  'fileMethods' => [
    'getAspectRatioStyles' => function () {
        return 'padding-bottom:' . ($this->height() / $this->width() * 100) . '%;height:0px;position:relative;';
    },
    'lazyImageHtml' => function () {
      return snippet('image', [ 'file' => $this ], true);
    }
  ]
]);
