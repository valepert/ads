function ADTStack (methods) {
  this.push = methods.push

  // -> Object || Null
  this.pop = methods.pop
  this.peek = methods.peek

  this.clear = methods.clear

  // -> Int
  this.height = methods.height
}

module.exports = {
  ADTStack
}
