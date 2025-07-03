import { describe, it, expect } from 'vitest'

import { calculator } from './calculator'

describe('Calculator', () => {
  it('sums two numbers', () => {
    // given
    const firstOperand = 2
    const secondOperand = 3
    const expectedResult = 5

    // when
    const result = calculator.sum(firstOperand, secondOperand)

    // then
    expect(result).toBe(expectedResult)
  })

  it('works with negative numbers', () => {
    // given
    const firstOperand = 2
    const secondOperand = -3
    const expectedResult = -1

    // when
    const result = calculator.sum(firstOperand, secondOperand)

    // then
    expect(result).toBe(expectedResult)
  })
})
