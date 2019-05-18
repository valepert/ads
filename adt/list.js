function ADTList (methods) {
  // -> Int
  this.size = methods.size
  // -> Boolean
  this.empty = methods.empty

  // -> String
  this.print = methods.print

  // Object -> Int || Null
  this.find = methods.find
  // Object -> Boolean
  this.contains = methods.contains

  this.append = methods.append
  this.remove = methods.remove
  this.clear = methods.clear

  // -> Int
  this.next = methods.next
  this.prev = methods.prev
  this.current = methods.current

  // Object -> Object || Null
  this.get = methods.get
  this.head = methods.head
  this.tail = methods.tail
}

module.exports = {
  ADTList
}
