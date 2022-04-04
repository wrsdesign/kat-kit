import constrain from './constrain'

// Re-maps a number from one range to another
// Details: https://github.com/processing/p5.js/blob/main/src/math/calculation.js#L448
let mapRange = (n, start1, stop1, start2, stop2, withinBounds = true) => {
  let newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  if (!withinBounds) {
    return newval
  }
  return start2 < stop2
    ? constrain(newval, start2, stop2)
    : constrain(newval, stop2, start2)
}

export default mapRange
