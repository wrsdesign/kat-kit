<?php if(isset($file) && $file->isResizable()): ?>
  <div style="<?= $file->getAspectRatioStyles() ?>">
    <img
      loading="lazy"
      data-srcset="<?= $file->srcset() ?>"
      alt="<?= $alt ?? null ?>"
      class="w-full h-full object-cover absolute">
  </div>
<?php endif ?>
