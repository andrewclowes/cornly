import { generateJourney } from '../src/journey'
import { Cargo } from '../src/cargo'

describe('generateJourney', () => {
  test('returns a journey when the farm contains 1 corn and 1 goose', () => {
    const farm = { cornCount: 1, gooseCount: 1 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns a journey when the farm contains 2 corn and 1 goose', () => {
    const farm = { cornCount: 2, gooseCount: 1 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.GOOSE,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns a journey when the farm contains 1 corn and 2 geese', () => {
    const farm = { cornCount: 1, gooseCount: 2 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.GOOSE,
      Cargo.CORN,
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 3 corn and 0 geese', () => {
    const farm = { cornCount: 3, gooseCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 0 corn and 3 geese', () => {
    const farm = { cornCount: 0, gooseCount: 3 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns a journey when the farm contains 3 corn and 1 goose', () => {
    const farm = { cornCount: 3, gooseCount: 1 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns a journey when the farm contains 1 corn and 3 geese', () => {
    const farm = { cornCount: 1, gooseCount: 3 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })
})
