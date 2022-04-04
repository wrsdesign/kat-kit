// Constrains a value between a minimum and maximum value.
// Details: https://github.com/processing/p5.js/blob/main/src/math/calculation.js#L110
let constrain = (n, low, high) => {
  return Math.max(Math.min(n, high), low)
}

export default constrain
