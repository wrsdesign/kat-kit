<?php

Kirby\Cms\App::plugin('wrs/kirby-wrs-utils', [
  'fileMethods' => [
    'getAspectRatioStyles' => function () {
        return 'padding-bottom:' . ($this->height() / $this->width() * 100) . '%;height:0px;position:relative;';
    },
    'lazyImageHtml' => function () {
      return snippet('image', [ 'file' => $this ], true);
    }
  ]
]);
