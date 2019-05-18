const { ADTList } = require('../adt/list')

const EMPTY = () => []

const MIN = (x, y) => x < y ? x : y
const MAX = (x, y) => x > y ? x : y
const NEXT = (i, end) => MIN(i + 1, end)
const PREV = (i) => MAX(i - 1, 0)

const LENGTH = (ds) => ds.length
const FIND = (x, ds) => ds.indexOf(x) >= 0 ? ds.indexOf(x) : null
const APPEND = (x, ds) => ds.push(x)
const REMOVE = (x, ds) => FIND(x, ds) ? ds.splice(FIND(x, ds), 1) : false
const HEAD = (ds) => ds[0] || null
const TAIL = (ds) => ds[LENGTH(ds) - 1] || null

const List = () => {
  let datastore = EMPTY()
  let position = 0
  const l = new ADTList({
    size: () => LENGTH(datastore),
    empty: () => LENGTH(datastore) === 0,

    print: () => datastore.toString(),

    find: (x) => FIND(x, datastore),
    contains: (x) => !!FIND(x, datastore),

    append: (x) => APPEND(x, datastore),
    remove: (x) => REMOVE(x, datastore),
    clear: () => { datastore = EMPTY(); position = 0 },

    next: () => { position = NEXT(position, LENGTH(datastore)) },
    prev: () => { position = PREV(position) },
    current: () => position,

    get: () => datastore[position] || null,
    head: () => HEAD(datastore),
    tail: () => TAIL(datastore)
  })
  return l
}

module.exports = {
  List
}
