import { Step } from './Step'

export const Steps = ({ journey }) =>
  <div>
    {
      journey.map((cargo, idx) => <Step index={idx} cargo={cargo} />)
    }
  </div>
