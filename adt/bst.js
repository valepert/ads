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
  this.preOrder = methods.preOrder
  this.postOrder = methods.postOrder

  // -> Node.data || Null
  this.min = methods.min
  this.max = methods.max
  // data -> Boolean
  this.find = methods.find
}

module.exports = {
  Node,
  ADTBST
}
