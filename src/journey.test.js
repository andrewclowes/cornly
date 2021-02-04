import { generateJourney } from '../src/journey'
import { Cargo } from '../src/cargo'

describe('generateJourney', () => {
  test('returns a journey when the farm contains 1 corn, 1 goose, 0 swan, 0 fox', () => {
    const farm = { cornCount: 1, gooseCount: 1, swanCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 2 corn, 1 goose, 0 swan, 0 fox', () => {
    const farm = { cornCount: 2, gooseCount: 1, swanCount: 0, foxCount: 0 }

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

  test('returns a journey when the farm contains 1 corn, 2 geese, 0 swan, 0 fox', () => {
    const farm = { cornCount: 1, gooseCount: 2, swanCount: 0, foxCount: 0 }

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

  test('returns a journey when the farm contains 3 corn, 0 geese, 0 swan, 0 fox', () => {
    const farm = { cornCount: 3, gooseCount: 0, swanCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 3 corn, 0 geese, 0 swan, 0 fox', () => {
    const farm = { cornCount: 3, gooseCount: 0, swanCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.EMPTY,
      Cargo.CORN
    ])
  })

  test('returns a journey when the farm contains 0 corn, 3 geese, 0 swan, 0 fox', () => {
    const farm = { cornCount: 0, gooseCount: 3, swanCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns a journey when the farm contains 3 corn, 0 goose, 0 swan, 3 fox', () => {
    const farm = { cornCount: 3, gooseCount: 0, swanCount: 0, foxCount: 3 }

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

  test('returns a journey when the farm contains 0 corn, 3 geese, 0 swan, 0 fox', () => {
    const farm = { cornCount: 0, gooseCount: 3, swanCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE
    ])
  })

  test('returns a journey when the farm contains 0 corn, 0 geese, 3 swan, 0 fox', () => {
    const farm = { cornCount: 0, gooseCount: 0, swanCount: 3, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.SWAN,
      Cargo.EMPTY,
      Cargo.SWAN,
      Cargo.EMPTY,
      Cargo.SWAN
    ])
  })

  test('returns a journey when the farm contains 1 corn, 1 goose, 0 swan, 1 fox', () => {
    const farm = { cornCount: 1, gooseCount: 1, swanCount: 0, foxCount: 1 }

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

  test('returns a journey when the farm contains 1 corn, 0 goose, 1 swan, 1 fox', () => {
    const farm = { cornCount: 1, gooseCount: 0, swanCount: 1, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.SWAN,
      Cargo.EMPTY,
      Cargo.CORN,
      Cargo.SWAN,
      Cargo.FOX,
      Cargo.EMPTY,
      Cargo.SWAN
    ])
  })

  test('returns a journey when the farm contains 0 corn, 2 goose, 2 swan, 0 fox', () => {
    const farm = { cornCount: 0, gooseCount: 2, swanCount: 2, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.GOOSE,
      Cargo.EMPTY,
      Cargo.SWAN,
      Cargo.EMPTY,
      Cargo.SWAN
    ])
  })

  test('returns a journey when the farm contains 0 corn, 0 goose, 2 swan, 1 fox', () => {
    const farm = { cornCount: 0, gooseCount: 0, swanCount: 2, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toEqual([
      Cargo.FOX,
      Cargo.EMPTY,
      Cargo.SWAN,
      Cargo.FOX,
      Cargo.SWAN,
      Cargo.EMPTY,
      Cargo.FOX
    ])
  })


  test('returns a journey when the farm contains 1 corn, 1 goose, 1 swan and 1 fox', () => {
    const farm = { cornCount: 1, gooseCount: 1, swanCount: 1, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 3 corn, 1 goose, 0 swan and 0 fox', () => {
    const farm = { cornCount: 3, gooseCount: 1, swanCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 1 corn, 3 geese, 0 swan and 0 fox', () => {
    const farm = { cornCount: 1, gooseCount: 3, swanCount: 0, foxCount: 0 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 2 corn, 1 goose, 0 swan and 1 fox', () => {
    const farm = { cornCount: 2, gooseCount: 1, swanCount: 0, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 1 corn, 2 geese, 0 swan and 1 fox', () => {
    const farm = { cornCount: 1, gooseCount: 2, swanCount: 0, foxCount: 1 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })

  test('returns no journey when the farm contains 1 corn, 1 goose and 2 fox', () => {
    const farm = { cornCount: 1, gooseCount: 1, swanCount: 0, foxCount: 2 }

    const result = generateJourney(farm)

    expect(result).toBeUndefined()
  })
})
