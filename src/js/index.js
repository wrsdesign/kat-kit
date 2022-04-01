import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

// Prevent scrolling while optionally allowing scrolling on specified elements
// https://github.com/bameyrick/prevent-scrolling
import { PreventScrolling, ReEnableScrolling } from 'prevent-scrolling'

/**
 * Force Scroll to the Top of the Page on Page Reload
 * Source: https://www.designcise.com/web/tutorial/how-to-force-scroll-to-the-top-of-the-page-on-page-reload-using-javascript
 */
history.scrollRestoration
  ? (history.scrollRestoration = 'manual')
  : (window.onbeforeunload = () => window.scrollTo(0, 0))

window.utils = {}

window.utils.PreventScrolling = PreventScrolling
window.utils.ReEnableScrolling = ReEnableScrolling

Alpine.plugin(intersect)
Alpine.start()
