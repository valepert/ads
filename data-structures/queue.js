const { ADTQueue } = require('../adt/queue')

const EMPTY = () => []

const ENQUEUE = (x, ds) => ds.push(x) || null
const DEQUEUE = (ds) => ds.shift() || null
const FRONT = (ds) => ds[0] || null
const BACK = (ds) => ds[ds.length - 1] || null

const Queue = () => {
  let datastore = EMPTY()
  const q = new ADTQueue({
    enqueue: (x) => ENQUEUE(x, datastore),
    dequeue: () => DEQUEUE(datastore),
    front: () => FRONT(datastore),
    back: () => BACK(datastore),
    empty: () => datastore.length === 0
  })
  return q
}

module.exports = {
  Queue
}
