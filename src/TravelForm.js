import { useState } from 'react'

export const TravelForm = () => {
  const [bagsOfCorn, setBagsOfCorn] = useState(0)
  const [costPerCrossing, setCostPerCrossing] = useState(0.25)
  const [overallCost, setOverallCost] = useState(0)

  const handleBagsOfCornChange = event => {
    const { value } = event.target
    setBagsOfCorn(value)
  }

  const handleCostPerCrossingChange = event => {
    const { value } = event.target
    setCostPerCrossing(value)
  }

  const handleCalculateClick = event => {
    if (event) {
      event.preventDefault();
    }

    const total = bagsOfCorn * costPerCrossing * 2
    setOverallCost(total)
  }

  return (
    <form>
      <label>
        Bags of corn:
        <input type="text" name="corn" value={bagsOfCorn} onChange={handleBagsOfCornChange}/>
      </label>
      <br/>
      <label>
        Cost per crossing (£):
        <input type="text" name="cost" value={costPerCrossing} onChange={handleCostPerCrossingChange}/>
      </label>
      <br/>
      <button onClick={handleCalculateClick}>
        Calculate
      </button>
      <p>£ {overallCost.toFixed(2)}</p>
    </form>
  )
}