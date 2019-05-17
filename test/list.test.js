/* global describe, expect, test */
const R = require('ramda')
const { ZERO, ONE, TWO, THREE } = require('./const')
const { List } = require('../data-structures/list')

const ITEMS = [`item${ZERO}`, `item${ONE}`, `item${TWO}`]
const ITEMS_STRING = ITEMS.toString() // 'item0,item1,item2'
const EMPTY_STRING = ''

const populate = (l, elements) => R.map(l.append)(elements)

describe('List', () => {
  test('emptiness', () => {
    const emptyList = List()

    expect(emptyList.isEmpty()).toBe(R.T())
    expect(emptyList.size()).toBe(ZERO)
    expect(emptyList.toString()).toBe(EMPTY_STRING)
    expect(emptyList.get()).toBeNull()
  })

  test('appending elements', () => {
    const list = List()

    // [0]
    list.append(ITEMS[ZERO])
    expect(list.isEmpty()).toBe(R.F())
    expect(list.size()).toBe(ONE)
    expect(list.get()).toBe(ITEMS[ZERO])

    // [0, 1, 2]
    list.append(ITEMS[ONE])
    list.append(ITEMS[TWO])

    expect(list.isEmpty()).toBe(R.F())
    expect(list.size()).toBe(THREE)
    expect(list.toString()).toBe(ITEMS_STRING)
  })

  test('clear', () => {
    const list = List()
    expect(list.isEmpty()).toBe(R.T())
    expect(list.get()).toBeNull()

    populate(list, ITEMS)
    expect(list.isEmpty()).toBe(R.F())
    expect(list.get()).toBe(ITEMS[ZERO])

    list.clear()
    expect(list.isEmpty()).toBe(R.T())
    expect(list.get()).toBeNull()
  })

  test('traverse elements', () => {
    const list = List()
    expect(list.current()).toBe(ZERO)
    expect(list.get()).toBeNull()

    list.next()
    expect(list.current()).toBe(ZERO)
    expect(list.get()).toBeNull()

    list.prev()
    expect(list.current()).toBe(ZERO)
    expect(list.get()).toBeNull()

    // [.0 -> 1 -> 2 -> //]
    populate(list, ITEMS)
    expect(list.current()).toBe(ZERO)
    expect(list.get()).toBe(ITEMS[ZERO])

    // [0 -> .1 -> 2 -> //]
    list.next()
    expect(list.current()).toBe(ONE)
    expect(list.get()).toBe(ITEMS[ONE])

    // [0 -> 1 -> .2 -> //]
    list.next()
    expect(list.current()).toBe(TWO)
    expect(list.get()).toBe(ITEMS[TWO])

    // [0 -> 1 -> 2 -> .//]
    list.next()
    list.next()
    expect(list.current()).toBe(THREE)
    expect(list.get()).toBeNull()

    // [0 -> .1 -> 2 -> .//]
    list.prev()
    list.prev()
    expect(list.current()).toBe(ONE)
    expect(list.get()).toBe(ITEMS[ONE])

    // [.0 -> 1 -> 2]
    list.prev()
    list.prev()
    expect(list.current()).toBe(ZERO)
    expect(list.get()).toBe(ITEMS[ZERO])
  })

  test('head / tail', () => {
    const list = List()
    expect(list.head()).toBeNull()
    expect(list.tail()).toBeNull()

    populate(list, ITEMS)

    expect(list.head()).toBe(ITEMS[ZERO])
    expect(list.tail()).toBe(ITEMS[TWO])
  })
})
