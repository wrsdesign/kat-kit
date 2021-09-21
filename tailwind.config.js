/**
 * Generate margins paddings & other spaces tailwindcss classes
 *
 * @param {number} [m=5] module width
 * @param {number} [c=50] module max steps
 * @return {array} array for tailwind config
 */
 const generateSpacing = (m = 5, c = 50) => {
  const result = {}

  for (let i = c; i >= 0; i--) {
    const r = i * m
    result[r] = `${r}px`
  }

  return result
}

module.exports = {
  purge: [
    'app/snippets/**/*.php',
    'app/templates/**/*.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    spacing: generateSpacing(5, 10),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@whiterussianstudio/tailwind-easing'),
  ],
}
