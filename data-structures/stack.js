const { ADTStack } = require('../adt/stack')

const EMPTY = () => []

const Stack = () => {
  let datastore = EMPTY()
  let top = 0
  const s = new ADTStack({
    push: (x) => { datastore[top++] = x },
    pop: () => top ? datastore[--top] : null,
    peek: () => datastore[top - 1] || null,
    clear: () => { datastore = EMPTY(); top = 0 },
    height: () => top
  })
  return s
}

module.exports = {
  Stack
}
