const { Stack } = require('../data-structures/stack')

const factorial = (n) => {
  const s = Stack()
  while (n > 1) {
    s.push(n--)
  }
  let product = 1
  while (s.height() > 0) {
    product *= s.pop()
  }
  return product
}

module.exports = {
  factorial
}
