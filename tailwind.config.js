module.exports = {
  content: [
    'app/templates/**/*.php',
    'app/snippets/**/*.php',
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
