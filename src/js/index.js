import Alpine from 'alpinejs'

// Prevent scrolling while optionally allowing scrolling on specified elements
// https://github.com/bameyrick/prevent-scrolling
import { PreventScrolling, ReEnableScrolling } from 'prevent-scrolling'

window.utils = {}

window.utils.PreventScrolling = PreventScrolling
window.utils.ReEnableScrolling = ReEnableScrolling

Alpine.start()
