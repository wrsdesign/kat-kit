  <?php if (!option('debug') and $site->scrips_footer()->isNotEmpty()) : ?>
    <?= $site->scrips_footer() ?>
  <?php endif; ?>
</body>
</html>
