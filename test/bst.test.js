/* global describe, expect, test */
const R = require('ramda')
const { BST } = require('..')

const populate = (t, elements) => R.map(t.insert)(elements)

describe('Binary Search Trees', () => {
  test.each(
    [
      [
        ['tree', 'queue', 'list', 'stack'],
        ['list', 'queue', 'stack', 'tree']
      ],
      [
        [23, 45, 16, 37, 3, 99, 22],
        [3, 16, 22, 23, 37, 45, 99]
      ]
    ])('inOrder sort(%p) = %p', (items, expected) => {
    const tree = BST()
    expect(tree.root()).toBeNull()

    populate(tree, items)
    expect(tree.root().data).toBe(items[0])
    expect(tree.inOrder()).toEqual(expected)
  })
})
