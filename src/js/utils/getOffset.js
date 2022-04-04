// Get the current coordinates of a node, relative to the document, corrected by scroll.
// Uses getBoundingClientRect()
// Details: https://code.area17.com/a17/a17-helpers/wikis/getOffset
let getOffset = (node) => {

  if (node) {
    var rect = node.getBoundingClientRect()

    return {
      top: rect.top + (document.documentElement.scrollTop || document.body.scrollTop),
      left: rect.left + (document.documentElement.scrollLeft || document.body.scrollLeft),
      bottom: rect.bottom + (document.documentElement.scrollTop || document.body.scrollTop),
      right: rect.right + (document.documentElement.scrollLeft || document.body.scrollLeft),
      width: rect.width,
      height: rect.height
    }
  } else {
    return null
  }
}

export default getOffset
