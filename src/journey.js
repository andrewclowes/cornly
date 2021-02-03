import { Cargo } from './cargo'

const chooseFarmCargo = ({
  cornCount,
  gooseCount
}, previousCargo) => {
  if (previousCargo !== Cargo.CORN && cornCount > 0 && (cornCount <= gooseCount || gooseCount === 0)) {
    return Cargo.CORN
  } else if (previousCargo !== Cargo.GOOSE && gooseCount > 0 && (cornCount >= gooseCount || cornCount === 0)) {
    return Cargo.GOOSE
  }

  return Cargo.EMPTY
}

const chooseMarketCargo = ({
  cornCount,
  gooseCount
}, previousCargo) => {
  if (previousCargo !== Cargo.CORN && cornCount > 0 && gooseCount > 0) {
    return Cargo.CORN
  } else if (previousCargo !== Cargo.GOOSE && cornCount > 0 && gooseCount > 0) {
    return Cargo.GOOSE
  }

  return Cargo.EMPTY
}

const loadCargo = (destination, cargo) => {
  if (cargo === Cargo.GOOSE) {
    return { ...destination, gooseCount: destination.gooseCount - 1 }
  } else if (cargo === Cargo.CORN) {
    return { ...destination, cornCount: destination.cornCount - 1 }
  }

  return destination
}

const unloadCargo = (destination, cargo) => {
  if (cargo === Cargo.GOOSE) {
    return { ...destination, gooseCount: destination.gooseCount + 1 }
  } else if (cargo === Cargo.CORN) {
    return { ...destination, cornCount: destination.cornCount + 1 }
  }

  return destination
}

const isJourneyUnsuccessful = ({
  cornCount,
  gooseCount
}) => cornCount > 0 && gooseCount > 0

const isJourneySuccessful = ({
  cornCount,
  gooseCount
}) => cornCount === 0 && gooseCount === 0

export const generateJourney = ({
  cornCount,
  gooseCount
}) => {
  if (cornCount > 0 && gooseCount > 0 && cornCount + gooseCount > 3) {
    return
  }

  let farm = { cornCount, gooseCount }
  let market = { cornCount: 0, gooseCount: 0 }

  const result = []
  let previousCargo = Cargo.EMPTY

  let count = 0
  while(count++ < 10) {
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
