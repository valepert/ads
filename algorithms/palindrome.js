const { Stack } = require('../data-structures/stack')

const palindrome = (word) => {
  const s = Stack()
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i])
  }
  let rword = ''
  while (s.height() > 0) {
    rword += s.pop()
  }
  return word === rword
}

module.exports = {
  palindrome
}
