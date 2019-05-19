/* global describe, expect, test */
const R = require('ramda')
const { BST } = require('..')

const populate = (t, elements) => R.map(t.insert)(elements)

const array = [23, 45, 16, 37, 3, 99, 22]
const sorted = [3, 16, 22, 23, 37, 45, 99]
const preorder = [23, 16, 3, 22, 45, 37, 99]
const postorder = [3, 22, 16, 37, 99, 45, 23]

const dict = ['tree', 'queue', 'list', 'stack']
const ordered = ['list', 'queue', 'stack', 'tree']

describe('Binary Search Trees', () => {
  test.each([
    [dict, ordered],
    [array, sorted]
  ])('inOrder sort(%p) = %p', (items, expected) => {
    const tree = BST()
    expect(tree.root()).toBeNull()

    populate(tree, items)
    expect(tree.root().data).toBe(items[0])
    expect(tree.inOrder()).toEqual(expected)
  })

  test.each([[array, preorder]])('preOrder', (items, expected) => {
    const tree = BST()
    populate(tree, items)

    expect(tree.root().data).toBe(items[0])
    expect(tree.preOrder()).toEqual(expected)
  })

  test.each([[array, postorder]])('postOrder', (items, expected) => {
    const tree = BST()
    populate(tree, items)

    expect(tree.root().data).toBe(items[0])
    expect(tree.postOrder()).toEqual(expected)
  })

  test.each([
    [[], null, null],
    [dict, 'list', 'tree'],
    [array, 3, 99]
  ]
  )('min / max (%p)', (items, expmin, expmax) => {
    const tree = BST()
    populate(tree, items)

    expect(tree.min()).toBe(expmin)
    expect(tree.max()).toBe(expmax)
  })

  test.each([
    [1, array, false],
    [3, array, true],
    [15, array, false],
    [23, array, true],
    [42, array, false],
    [99, array, true],
    ['tree', dict, true],
    ['hello', dict, false]
  ])('find %p in %p: %p', (value, items, expected) => {
    const tree = BST()
    populate(tree, items)

    expect(tree.find(value)).toBe(expected)
  })
})
