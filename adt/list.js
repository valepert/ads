function ADTList (methods) {
  this.size = methods.size
  this.isEmpty = methods.isEmpty
  this.clear = methods.clear

  this.toString = methods.toString

  this.append = methods.append
  this.remove = methods.remove

  this.next = methods.next
  this.prev = methods.prev
  this.current = methods.current

  this.get = methods.get
  this.head = methods.head
  this.tail = methods.tail
}

module.exports = {
  ADTList
}
