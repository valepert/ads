/* global describe, expect, test */
const R = require('ramda')
const { ZERO, ONE, TWO, THREE } = require('./const')
const { List } = require('..')

const ITEMS = [`item${ZERO}`, `item${ONE}`, `item${TWO}`]
const ITEMS_STRING = ITEMS.toString() // 'item0,item1,item2'
const EMPTY_STRING = ''

const populate = (l, elements) => R.map(l.append)(elements)

describe('List', () => {
  test('emptiness', () => {
    const emptyList = List()

    expect(emptyList.empty()).toBe(R.T())
    expect(emptyList.size()).toBe(ZERO)
    expect(emptyList.print()).toBe(EMPTY_STRING)
    expect(emptyList.get()).toBeNull()
  })

  test('appending elements', () => {
    const list = List()

    // [0]
    list.append(ITEMS[ZERO])
    expect(list.empty()).toBe(R.F())
    expect(list.size()).toBe(ONE)
    expect(list.get()).toBe(ITEMS[ZERO])

    // [0, 1, 2]
    list.append(ITEMS[ONE])
    list.append(ITEMS[TWO])

    expect(list.empty()).toBe(R.F())
    expect(list.size()).toBe(THREE)
    expect(list.print()).toBe(ITEMS_STRING)
  })

  test('clear', () => {
    const list = List()
    expect(list.empty()).toBe(R.T())
    expect(list.get()).toBeNull()
    expect(list.current()).toBe(ZERO)

    populate(list, ITEMS)
    expect(list.empty()).toBe(R.F())
    expect(list.get()).toBe(ITEMS[ZERO])
    list.next()
    expect(list.current()).toBe(ONE)

    list.clear()
    expect(list.empty()).toBe(R.T())
    expect(list.get()).toBeNull()
    expect(list.current()).toBe(ZERO)
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

  test('find / contains / remove', () => {
    const list = List()
    populate(list, ITEMS)

    expect(list.find(EMPTY_STRING)).toBeNull()
    expect(list.size()).toBe(THREE)

    expect(list.contains(ITEMS[ONE])).toBe(R.T())
    expect(list.find(ITEMS[ONE])).toBe(ONE)

    list.remove(ITEMS[ONE])
    expect(list.contains(ITEMS[ONE])).toBe(R.F())
    expect(list.find(ITEMS[ONE])).toBeNull()
    expect(list.size()).toBe(TWO)
  })
})
