// Run function on next available event loop/DOM update
// Details: https://medium.com/@owencm/one-weird-trick-to-performant-touch-response-animations-with-react-9fe4a0838116
// Details: https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf 
let nextTick = (fn) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fn()
    })
  })
}

export default nextTick
