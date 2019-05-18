function Node (data, left, right) {
  this.data = data
  this.left = left
  this.right = right
}

function ADTBST (methods) {
  // -> Node || Null
  this.root = methods.root

  this.insert = methods.insert

  // -> List[Node.data]
  this.inOrder = methods.inOrder
}

module.exports = {
  Node,
  ADTBST
}
