/* global describe, expect, test */
const R = require('ramda')
const { ZERO, ONE, TWO } = require('./const')
const { Queue } = require('..')

const ITEMS = [`item${ZERO}`, `item${ONE}`, `item${TWO}`]

const populate = (q, elements) => R.map(q.enqueue)(elements)

describe('Queue', () => {
  test('enqueue', () => {
    const queue = Queue()
    expect(queue.front()).toBeNull()
    expect(queue.back()).toBeNull()
    expect(queue.empty()).toBe(R.T())

    queue.enqueue(ITEMS[ZERO])
    expect(queue.front()).toBe(ITEMS[ZERO])
    expect(queue.back()).toBe(ITEMS[ZERO])
    expect(queue.empty()).toBe(R.F())

    queue.enqueue(ITEMS[ONE])
    expect(queue.front()).toBe(ITEMS[ZERO])
    expect(queue.back()).toBe(ITEMS[ONE])
    expect(queue.empty()).toBe(R.F())
  })

  test('dequeue', () => {
    const queue = Queue()
    populate(queue, ITEMS)

    expect(queue.front()).toBe(ITEMS[ZERO])
    expect(queue.back()).toBe(ITEMS[TWO])

    expect(queue.dequeue()).toBe(ITEMS[ZERO])
    expect(queue.dequeue()).toBe(ITEMS[ONE])
    expect(queue.dequeue()).toBe(ITEMS[TWO])
    expect(queue.dequeue()).toBeNull()
  })
})
