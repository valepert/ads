const { Stack } = require('../data-structures/stack')

const populate = (s, n, b) => {
  s.push(n % b)
  let d = Math.floor(n /= b)
  if (d > 0) {
    populate(s, d, b)
  }
}

const convert = (s) => {
  let converted = ''
  while (s.height() > 0) {
    converted += s.pop()
  }
  return converted
}

// convert decimal number to bases [2, 9]
const conversion = (decimal, base) => {
  const stack = Stack()
  populate(stack, decimal, base)
  return convert(stack)
}

module.exports = {
  conversion
}
