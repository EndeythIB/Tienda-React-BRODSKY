import logo from './assets/libro.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <h1>LIBRITOS</h1>
        <h5>
          FUTURA TIENDA EN <span>REACT</span>
        </h5>
      </header>
    </div>
  );
}

export default App;
