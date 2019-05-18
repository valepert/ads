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

function INORDER (node, output) {
  if (node) {
    INORDER(node.left, output)
    output.push(node.data)
    INORDER(node.right, output)
    return output
  }
}

const BST = () => {
  let root = null
  const t = new ADTBST({
    root: () => root,
    insert: (x) => { root = INSERT(x, root) },
    inOrder: () => INORDER(root, [])
  })
  return t
}

module.exports = {
  BST
}
