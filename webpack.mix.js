const conf = {
  proxy: 'wrskirbykit.test',
  scripts: 'resources/js/index.js', // String or Array
  styles: 'resources/css/index.css', // String or Array
  // static: 'resources/static',
  public: 'public/assets',
  aliases: {
    '@utils': 'resources/js/utils',
    '@components': 'resources/js/components',
    '@vendors': 'resources/js/vendors',
  },
}

/**
 * Global imports
 * Mix (https://laravel-mix.com/docs/5.0/installation)
 * Path (https://nodejs.org/api/path.html)
 */
const mix = require('laravel-mix')
const path = require('path')

/**
 * Create js folders aliases and remove ../../../ hell
 * https://webpack.js.org/configuration/resolve/
 */
if (conf.aliases) {
  mix.alias(conf.aliases)
}

/**
 * Build .js files
 * https://laravel-mix.com/docs/5.0/mixjs
 */
if (conf.scripts) {
  if (conf.scripts instanceof Array) {
    conf.scripts.forEach((file) => {
      mix.js(file, path.resolve(__dirname, 'js')).extract()
    })
  } else {
    mix.js(path.resolve(__dirname, conf.scripts), 'js').extract()
  }
}

/**
 * Build .scss files
 * https://laravel-mix.com/docs/5.0/css-preprocessors
 */
if (conf.styles) {
  if (conf.styles instanceof Array) {
    conf.styles.concat(conf.styles).forEach((file) => {
      mix.css(file, path.resolve(__dirname, 'css'))
    })
  } else {
    mix.css(path.resolve(__dirname, conf.styles), 'css')
  }
}

if (conf.static) {
  mix.copyDirectory(conf.static, path.join(conf.public, 'static'))
}

/**
 * Browsersync
 * Mix (https://laravel-mix.com/docs/5.0/browsersync)
 * BrowserSync (https://browsersync.io/docs/options)
 */
mix.browserSync({
  proxy: conf.proxy || false,
  ghostMode: false,
  notify: false,
  watch: true
})

/**
 * Misc
 */
mix
  .disableNotifications()
  .setPublicPath(conf.public || '')
  .options({ processCssUrls: false })

  if (mix.inProduction()) {
    mix.version()
  }
