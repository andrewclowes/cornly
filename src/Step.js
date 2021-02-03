export const Step = ({ index, cargo }) => (
  <div>
    <div className="cargo">{cargo}</div>
    <div className="arrow">
      <div className="line"></div>
      <div className={(index % 2 === 0 ? 'left': 'right') + '-point'}></div>
    </div>
  </div>
)
