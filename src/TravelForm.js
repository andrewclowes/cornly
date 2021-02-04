import { useState } from 'react'
import { Steps } from './Steps'
import { generateJourney } from './journey'
import { calculateCost } from './cost'

export const TravelForm = () => {
  const [numberOfCorn, setNumberOfCorn] = useState(0)
  const [numberOfGeese, setNumberOfGeese] = useState(0)
  const [numberOfSwans, setNumberOfSwans] = useState(0)
  const [numberOfFoxes, setNumberOfFoxes] = useState(0)
  const [costPerCrossing, setCostPerCrossing] = useState(0.25)

  const [overallCost, setOverallCost] = useState(null)
  const [journey, setJourney] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleBagsOfCornChange = event => {
    const { value } = event.target
    setNumberOfCorn(Math.round(value))
  }

  const handleNumberOfGeeseChange = event => {
    const { value } = event.target
    setNumberOfGeese(Math.round(value))
  }

  const handleNumberOfSwansChange = event => {
    const { value } = event.target
    setNumberOfSwans(Math.round(value))
  }

  const handleNumberOfFoxesChange = event => {
    const { value } = event.target
    setNumberOfFoxes(Math.round(value))
  }

  const handleCostPerCrossingChange = event => {
    const { value } = event.target
    setCostPerCrossing(value)
  }

  const handleCalculateClick = event => {
    if (event) {
      event.preventDefault();
    }

    const journey = generateJourney({
      cornCount: numberOfCorn,
      gooseCount: numberOfGeese,
      swanCount: numberOfSwans,
      foxCount: numberOfFoxes
    })
    if (!journey) {
      setOverallCost(null)
      setJourney(null)
      setErrorMessage('Journey is not possible, please retry')
      return
    }

    const total = calculateCost(journey.length, costPerCrossing)
    setOverallCost(total)
    setJourney(journey)
    setErrorMessage(null)
  }

  return (
    <form className="form travel-form">
      <div className="card p-2 mb-3">
        <div className="form-group mb-4">
          <label htmlFor="number-of-corn" className="control-label">Bags of corn:</label>
          <input type="text" pattern="\d*" className="form-control" name="number-of-corn" value={numberOfCorn} onChange={handleBagsOfCornChange}/>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="number-of-geese" className="control-label">Gaggle of geese:</label>
          <input type="text" pattern="\d*" className="form-control" name="number-of-geese" value={numberOfGeese} onChange={handleNumberOfGeeseChange}/>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="number-of-swans" className="control-label">Bevy of swans:</label>
          <input type="text" pattern="\d*" className="form-control" name="number-of-swans" value={numberOfSwans} onChange={handleNumberOfSwansChange}/>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="number-of-fox" className="control-label">Skulk of foxes:</label>
          <input type="text" pattern="\d*" className="form-control" name="number-of-fox" value={numberOfFoxes} onChange={handleNumberOfFoxesChange}/>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="cost-per-crossing">Cost per crossing (£):</label>
          <input type="number" min="0" className="form-control" id="cost-per-crossing" value={costPerCrossing} onChange={handleCostPerCrossingChange}/>
        </div>
        <button className="btn btn-primary mb-2" onClick={handleCalculateClick}>
          Calculate
        </button>
      </div>
      {
        overallCost !== null && journey &&
        <div className="result card mb-3">
          <div className="mt-3">Cost 💰:</div>
          <p className="cost">£{overallCost.toFixed(2)}</p>
          <div className="mb-3">Steps 🚤:</div>
          <Steps journey={journey} />
          <br/>
        </div>
      }
      {errorMessage && <div className="mt-3 p-4 error">{errorMessage}</div>}

      <div className="mt-3 p-4 notice mb-3">Customer Notice : please do not travel between 8-10am and 4-6pm</div>
    </form>
  )
}
