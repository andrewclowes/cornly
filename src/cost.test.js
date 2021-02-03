import { returnStatement } from '@babel/types'
import { calculateCost } from './cost'

describe('calculateCost', () => {
  for (const { numberOfCrossings, costPerCrossing, expected } of [
    { numberOfCrossings: 6, costPerCrossing: 0.25, expected: 1.5 },
    { numberOfCrossings: 2, costPerCrossing: 0.5, expected: 1 },
    { numberOfCrossings: 10, costPerCrossing: 1, expected: 10 }
  ]) {
    test(`calculates cost when number of crossings is ${numberOfCrossings} and cost per crossing is ${costPerCrossing}`, () => {
      const result = calculateCost(numberOfCrossings, costPerCrossing)

      expect(result).toEqual(expected)
    })
  }
})
