import { Step } from './Step'

export const Steps = ({ journey }) =>
  <div className="container">
    <div className="row">
      <div className="col d-flex justify-content-center align-items-center">
        Farm
        <br/> 🚜🍂
      </div>
      <div className="col river p-0">
        {
          journey.map((cargo, idx) => <Step key={idx} index={idx} cargo={cargo} />)
        }
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        Market
        <br/> 🏪📈
      </div>
    </div>
  </div>
