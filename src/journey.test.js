import { generateJourney } from '../src/journey'
import { Cargo } from '../src/cargo'

describe('generateJourney', () => {
  test('returns a journey when the farm contains 1 corn, 1 goose, and 0 fox', () => {
    const farm = { cornCount: 1, gooseCount: 1, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 2 corn, 1 goose and 0 fox', () => {
    const farm = { cornCount: 2, gooseCount: 1, foxCount: 0 }

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

  test('returns a journey when the farm contains 1 corn, 2 geese and 0 fox', () => {
    const farm = { cornCount: 1, gooseCount: 2, foxCount: 0 }

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

  test('returns a journey when the farm contains 3 corn, 0 geese and 0 fox', () => {
    const farm = { cornCount: 3, gooseCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 3 corn, 0 geese and 0 fox', () => {
    const farm = { cornCount: 3, gooseCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 0 corn, 3 geese and 0 fox', () => {
    const farm = { cornCount: 0, gooseCount: 3, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns a journey when the farm contains 3 corn, 0 goose, 3 fox', () => {
    const farm = { cornCount: 3, gooseCount: 0, foxCount: 3 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.FOX,
      Cargo.EMPTY,
      Cargo.FOX,
      Cargo.EMPTY,
      Cargo.FOX
    ])
  })

  test('returns a journey when the farm contains 0 corn, 3 geese and 0 fox', () => {
    const farm = { cornCount: 0, gooseCount: 3, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns a journey when the farm contains 1 corn, 1 goose, 1 fox', () => {
    const farm = { cornCount: 1, gooseCount: 1, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.GOOSE,
      Cargo.FOX,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns no journey when the farm contains 3 corn, 1 goose and 0 fox', () => {
    const farm = { cornCount: 3, gooseCount: 1, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 1 corn, 3 geese and 0 fox', () => {
    const farm = { cornCount: 1, gooseCount: 3, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 2 corn, 1 goose and 1 fox', () => {
    const farm = { cornCount: 2, gooseCount: 1, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 1 corn, 2 geese and 1 fox', () => {
    const farm = { cornCount: 1, gooseCount: 2, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 1 corn, 1 goose and 2 fox', () => {
    const farm = { cornCount: 1, gooseCount: 1, foxCount: 2 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })
})
