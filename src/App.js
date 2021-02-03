import './App.css';
import { TravelForm } from './TravelForm'
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Logo"/>
      {/* <h1>Cornly</h1> */}
      <div className="form-container">
        <TravelForm/>
      </div>
    </div>
  );
}

export default App;
