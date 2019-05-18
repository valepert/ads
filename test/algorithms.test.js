/* global describe, expect, test */
const { conversion, palindrome, factorial } = require('..')

describe('conversion', () => {
  test.each(
    [
      [32, 2, '100000'],
      [42, 4, '222'],
      [777, 7, '2160'],
      [125, 8, '175']
    ]
  )('%i to base %i = %s', (number, base, expected) => {
    expect(conversion(number, base)).toEqual(expected)
  })
})

describe('palindrome', () => {
  test.each(
    [
      ['racecar', true],
      ['palindrome', false],
      ['madamimadam', true],
      ['eodermdrome', false],
      ['amanaplanacanalpanama', true],
      ['itopinonavevanonipoti', true]
    ]
  )('is %s palindrome? %p', (word, expected) => {
    expect(palindrome(word)).toEqual(expected)
  })
})

describe('factorial', () => {
  test.each(
    [
      [0, 1],
      [1, 1],
      [3, 6],
      [5, 120],
      [8, 40320],
      [10, 3628800]
    ]
  )('%i! = %i', (number, expected) => {
    expect(factorial(number)).toEqual(expected)
  })
})
