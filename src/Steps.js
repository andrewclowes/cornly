import { Step } from './Step'

export const Steps = ({ journey }) =>
  <div className="container">
    <div className="row">
      <div className="col d-flex justify-content-center align-items-center">
        Farm
      </div>
      <div className="col river p-0">
        {
          journey.map((cargo, idx) => <Step index={idx} cargo={cargo} />)
        }
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        Market
      </div>
    </div>
  </div>
