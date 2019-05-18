/* global describe, expect, test */
const R = require('ramda')
const { ZERO, ONE, TWO, THREE } = require('./const')
const { Stack } = require('..')

const ITEMS = [`item${ZERO}`, `item${ONE}`, `item${TWO}`]

const populate = (s, elements) => R.map(s.push)(elements)

describe('Stack', () => {
  test('push / peek', () => {
    const stack = Stack()
    expect(stack.peek()).toBeNull()
    expect(stack.height()).toBe(ZERO)

    stack.push(ITEMS[ZERO])
    expect(stack.peek()).toBe(ITEMS[ZERO])
    expect(stack.height()).toBe(ONE)

    stack.push(ITEMS[ONE])
    expect(stack.peek()).toBe(ITEMS[ONE])
    expect(stack.height()).toBe(TWO)

    stack.push(ITEMS[TWO])
    expect(stack.peek()).toBe(ITEMS[TWO])
    expect(stack.height()).toBe(THREE)
  })

  test('push / pop', () => {
    const stack = Stack()
    expect(stack.pop()).toBeNull()
    expect(stack.height()).toBe(ZERO)

    stack.push(ITEMS[ZERO])
    expect(stack.height()).toBe(ONE)
    expect(stack.pop()).toBe(ITEMS[ZERO])
    expect(stack.height()).toBe(ZERO)

    stack.push(ITEMS[ONE])
    stack.push(ITEMS[TWO])
    expect(stack.height()).toBe(TWO)
    expect(stack.pop()).toBe(ITEMS[TWO])
    expect(stack.pop()).toBe(ITEMS[ONE])
    expect(stack.height()).toBe(ZERO)
  })

  test('clear', () => {
    const stack = Stack()

    populate(stack, ITEMS)
    expect(stack.height()).toBe(THREE)

    stack.clear()
    expect(stack.height()).toBe(ZERO)
    expect(stack.peek()).toBeNull()
    expect(stack.pop()).toBeNull()

    populate(stack, ITEMS)
    expect(stack.height()).toBe(THREE)
  })
})
