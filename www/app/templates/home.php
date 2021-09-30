<?= snippet('site/header') ?>

<div class="flex items-center justify-center h-screen antialiased appearance-none bg-black text-true-gray-500">
  <div class="-mt-10px text-center">
    <div class="bg-opacity-10 py-15px inline-flex items-center px-20px mb-10px space-x-10px bg-white rounded-full">
      <span>Start your next project with</span>
      <a href="https://whiterussian.studio" rel="noopener noreferrer" target="_blank">
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 34.3636C27.0374 34.3636 34.3636 27.0374 34.3636 18C34.3636 8.96261 27.0374 1.63636 18 1.63636C8.96261 1.63636 1.63636 8.96261 1.63636 18C1.63636 27.0374 8.96261 34.3636 18 34.3636ZM36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z" fill="currentColor"/>
          <path d="M18.076 21.088H12.3876L11.7545 20.3133L13.1072 14.2209C11.3508 14.9214 9.26508 14.55 7.87662 13.1822L8.89382 12.1792C10.0735 13.3406 11.9678 13.4782 13.3009 12.4994L13.7007 12.2056L14.8642 12.9412L13.3707 19.6701H18.076V21.088ZM24.8659 13.9822C23.5785 13.9822 22.3676 13.4875 21.457 12.5896L22.4748 11.5866C23.1135 12.2166 23.9632 12.5638 24.8659 12.5638C25.7681 12.5638 26.6178 12.2166 27.2571 11.5866L28.2748 12.5896C27.3637 13.4875 26.1528 13.9822 24.8659 13.9822Z" fill="currentColor"/>
          <path d="M12.0907 27.3852C13.7644 28.6507 15.8491 29.4012 18.1091 29.4012C23.6257 29.4012 28.0977 24.9292 28.0977 19.4126H26.4884C26.4884 24.0404 22.7369 27.7919 18.1091 27.7919C16.2941 27.7919 14.6138 27.2148 13.2418 26.2341L12.0907 27.3852Z" fill="currentColor"/>
        </svg>
      </a>
    </div>
    <div class="text-xs opacity-50">in <?= date('Y') ?></div>
  </div>
</div>

<?= snippet('site/footer') ?>
