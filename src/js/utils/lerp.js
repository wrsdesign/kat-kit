// Linear interpolation function
// Git: https://github.com/Anemolo/lerpy
// Details: https://github.com/processing/p5.js/blob/main/src/math/calculation.js#L309
let lerp = (x, y, speed = 0.1, limit = 0.001) => {
  let change = (y - x) * speed
  if (Math.abs(change) < limit) {
    change = y - x
  }
  return change
}

export default lerp
