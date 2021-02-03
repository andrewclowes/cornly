export const Step = ({ index, cargo }) => (
  <div className="container">
    <div className="row">
      <p className="col">{index % 2 === 0 ? 'To market' : 'To farm'}</p>
      <p className="col">{cargo}</p>
    </div>
  </div>
)
