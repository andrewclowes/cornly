export const Step = ({ index, cargo }) => {
  return (
    <div className="container">
      <div className="row">
        <p className="col-sm-6">{index % 2 === 0 ? 'To market' : 'To farm'}</p>
        <p className="col-sm-6">{cargo}</p>
      </div>
    </div>
  )
}