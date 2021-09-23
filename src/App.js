import logo from './assets/libro.png';
// import NavLogo from '.assets/librin.png';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ScrollWidget from './components/ScrollWidget';
function App() {
  return (
    <div className="App">
      <NavBar/>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <h1>LIBRITOS</h1>
        <h5>
          REVISA NUESTRO <span>CATÁLOGO</span>
        </h5>
        <ScrollWidget/>
      </header>

      <div class="div-catalog" id="catalog">
        <ItemListContainer greeting={"BIENVENIDO"}/>
      </div>



    </div>
  );
}

export default App;
