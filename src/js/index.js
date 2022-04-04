import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

import LazyLoad from 'vanilla-lazyload'

// Prevent scrolling while optionally allowing scrolling on specified elements
// Git: https://github.com/bameyrick/prevent-scrolling
import { PreventScrolling, ReEnableScrolling } from 'prevent-scrolling'


// Force Scroll to the Top of the Page on Page Reload
// Details: https://www.designcise.com/web/tutorial/how-to-force-scroll-to-the-top-of-the-page-on-page-reload-using-javascript
history.scrollRestoration
  ? (history.scrollRestoration = 'manual')
  : (window.onbeforeunload = () => window.scrollTo(0, 0))

// Global usage utils object
window.utils = {}

window.lazyLoadInstance = new LazyLoad({
  elements_selector: '[loading=lazy]',
  use_native: true
})

window.utils.PreventScrolling = PreventScrolling
window.utils.ReEnableScrolling = ReEnableScrolling

Alpine.plugin(intersect)
Alpine.start()
