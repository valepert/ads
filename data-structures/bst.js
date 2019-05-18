const { Node, ADTBST } = require('../adt/bst')

const INSERTION = (root, node) => {
  let current = root
  let parent
  while (true) {
    parent = current
    if (node.data < current.data) {
      current = current.left
      if (current == null) {
        parent.left = node
        break
      }
    } else {
      current = current.right
      if (current == null) {
        parent.right = node
        break
      }
    }
  }
  return root
}

const INSERT = (data, root) => {
  let leaf = new Node(data, null, null)
  return root ? INSERTION(root, leaf) : leaf
}

const INORDER = (node, output) => {
  if (node) {
    INORDER(node.left, output)
    output.push(node.data)
    INORDER(node.right, output)
    return output
  }
}

const PREORDER = (node, output) => {
  if (node) {
    output.push(node.data)
    PREORDER(node.left, output)
    PREORDER(node.right, output)
    return output
  }
}

const POSTORDER = (node, output) => {
  if (node) {
    POSTORDER(node.left, output)
    POSTORDER(node.right, output)
    output.push(node.data)
    return output
  }
}

const MIN = (node) => node.left ? MIN(node.left) : node.data
const MAX = (node) => node.right ? MAX(node.right) : node.data

const BST = () => {
  let root = null
  const t = new ADTBST({
    root: () => root,
    insert: (x) => { root = INSERT(x, root) },
    inOrder: () => INORDER(root, []),
    preOrder: () => PREORDER(root, []),
    postOrder: () => POSTORDER(root, []),
    min: () => root ? MIN(root) : null,
    max: () => root ? MAX(root) : null
  })
  return t
}

module.exports = {
  BST
}
