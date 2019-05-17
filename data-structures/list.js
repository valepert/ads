const { ADTList } = require('../adt/list')

const EMPTY = () => []

const MIN = (x, y) => x < y ? x : y
const MAX = (x, y) => x > y ? x : y
const NEXT = (i, end) => MIN(i + 1, end)
const PREV = (i) => MAX(i - 1, 0)

const APPEND = (x, ds) => ds.push(x)
const LENGTH = (ds) => ds.length

const List = () => {
  let datastore = EMPTY()
  let position = 0
  const l = new ADTList({
    size: () => LENGTH(datastore),
    isEmpty: () => LENGTH(datastore) === 0,
    clear: (x) => { datastore = EMPTY() },
    toString: () => datastore.toString(),

    append: (x) => APPEND(x, datastore),

    next: () => { position = NEXT(position, LENGTH(datastore)) },
    prev: () => { position = PREV(position) },
    current: () => position,

    get: () => datastore[position] || null,
    head: () => datastore[0] || null,
    tail: () => datastore[LENGTH(datastore) - 1] || null
  })
  return l
}

module.exports = {
  List
}
