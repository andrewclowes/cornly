import { useState } from 'react'

export const TravelForm = () => {
  const [bagsOfCorn, setBagsOfCorn] = useState(0)
  const [costPerCrossing, setCostPerCrossing] = useState(0.25)
  const [overallCost, setOverallCost] = useState(null)

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
    <form role="form" className="form">
      <div className="form-group mb-4">
        <label htmlFor="bags-of-corn" className="control-label">Bags of corn:</label>
        <input type="text" className="form-control" name="bags-of-corn" value={bagsOfCorn} onChange={handleBagsOfCornChange}/>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="cost-per-crossing">Cost per crossing (£):</label>
        <input type="text" className="form-control" id="cost-per-crossing" value={costPerCrossing} onChange={handleCostPerCrossingChange}/>
      </div>
      <button className="btn btn-primary mb-4" onClick={handleCalculateClick}>
        Calculate
      </button>
      {overallCost !== null &&
        <div className="result">
          <p className="cost">£ {overallCost.toFixed(2)}</p>
        </div>
      }
    </form>
  )
}