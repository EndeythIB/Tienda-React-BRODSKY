import logo from './assets/libro.png';
// import NavLogo from '.assets/librin.png';
import './App.css';
import ButtonAppBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
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
