import { Cargo } from './cargo'

const isNotBird = cargo => cargo !== Cargo.GOOSE && cargo !== Cargo.SWAN

const chooseFarmCargo = ({
  cornCount,
  gooseCount,
  swanCount,
  foxCount
}, previousCargo) => {
  const birdCount = gooseCount + swanCount

  if (isNotBird(previousCargo) && gooseCount > 0 && (birdCount <= cornCount || birdCount <= foxCount || foxCount + cornCount === 0)) {
    return Cargo.GOOSE
  } else if (isNotBird(previousCargo) && swanCount > 0 && (birdCount <= cornCount || birdCount <= foxCount || foxCount + cornCount === 0)) {
    return Cargo.SWAN
  } else if (previousCargo !== Cargo.FOX && foxCount > 0 && (foxCount <= birdCount || cornCount + birdCount === 0)) {
    return Cargo.FOX
  } else if (previousCargo !== Cargo.CORN && cornCount > 0) {
    return Cargo.CORN
  }

  return Cargo.EMPTY
}

const chooseMarketCargo = ({
  cornCount,
  gooseCount,
  swanCount,
  foxCount
}, previousCargo) => {
  const birdCount = gooseCount + swanCount

  if (isNotBird(previousCargo) && gooseCount > 0 && (cornCount > 0 || foxCount > 0)) {
    return Cargo.GOOSE
  } else if (isNotBird(previousCargo) && swanCount > 0 && (cornCount > 0 || foxCount > 0)) {
    return Cargo.SWAN
  } else if (previousCargo !== Cargo.FOX && foxCount > 0 && birdCount > 0) {
    return Cargo.FOX
  } else if (previousCargo !== Cargo.CORN && cornCount > 0 && birdCount > 0) {
    return Cargo.CORN
  }

  return Cargo.EMPTY
}

const loadCargo = (destination, cargo) => {
  if (cargo === Cargo.GOOSE) {
    return { ...destination, gooseCount: destination.gooseCount - 1 }
  } else if (cargo === Cargo.SWAN) {
    return { ...destination, swanCount: destination.swanCount - 1 }
  } else if (cargo === Cargo.CORN) {
    return { ...destination, cornCount: destination.cornCount - 1 }
  } else if (cargo === Cargo.FOX) {
    return { ...destination, foxCount: destination.foxCount - 1 }
  }

  return destination
}

const unloadCargo = (destination, cargo) => {
  if (cargo === Cargo.GOOSE) {
    return { ...destination, gooseCount: destination.gooseCount + 1 }
  } else if (cargo === Cargo.SWAN) {
    return { ...destination, swanCount: destination.swanCount + 1 }
  } else if (cargo === Cargo.CORN) {
    return { ...destination, cornCount: destination.cornCount + 1 }
  } else if (cargo === Cargo.FOX) {
    return { ...destination, foxCount: destination.foxCount + 1 }
  }

  return destination
}

const isJourneyUnsuccessful = ({
  cornCount,
  gooseCount,
  swanCount,
  foxCount
}) => (cornCount > 0 && gooseCount + swanCount > 0) || (gooseCount + swanCount > 0 && foxCount > 0)

const isJourneySuccessful = ({
  cornCount,
  gooseCount,
  swanCount,
  foxCount
}) => cornCount + gooseCount + swanCount + foxCount === 0

export const generateJourney = ({
  cornCount,
  gooseCount,
  swanCount,
  foxCount
}) => {
  if (cornCount > 0 && gooseCount > 0 && cornCount + gooseCount > 3) {
    return
  }

  let farm = { cornCount, gooseCount, swanCount, foxCount }
  let market = { cornCount: 0, gooseCount: 0, swanCount: 0, foxCount: 0 }

  const result = []
  let previousCargo = Cargo.EMPTY

  while(true) {
    farm = unloadCargo(farm, previousCargo)

    // Journey
    const cargo = chooseFarmCargo(farm, previousCargo)
    farm = loadCargo(farm, cargo)
    if (isJourneyUnsuccessful(farm)) {
      return
    }
    result.push(cargo)

    if (isJourneySuccessful(farm)) {
      break
    }

    market = unloadCargo(market, cargo)

    // Return journey
    const returnCargo = chooseMarketCargo(market, cargo)
    market = loadCargo(market, returnCargo)
    result.push(returnCargo)

    previousCargo = returnCargo
  }

  return result
}
