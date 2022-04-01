module.exports = {
  content: [
    'www/app/templates/**/*.php',
    'www/app/snippets/**/*.php',
    'src/js/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
