function ADTQueue (methods) {
  this.enqueue = methods.enqueue
  // -> Object || Null
  this.dequeue = methods.dequeue
  this.front = methods.front
  this.back = methods.back
  // -> Boolean
  this.empty = methods.empty
}

module.exports = {
  ADTQueue
}
