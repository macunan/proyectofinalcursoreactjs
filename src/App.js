import './App.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js'
// Did at  npm install  bootstrap react-bootstrap in project base directory
 import "bootstrap/dist/css/bootstrap.min.css";
     // <ItemListContainer name={mensaje} />


const mensaje = "Bienvenido al paraiso de las frutas secas, nosotros secamos con amor";
function App() {
  return (
<div name="background" class="p-3 mb-2 bg-dark text-white">
    <div className="App">
 <NavBar/>




         <ItemDetailContainer/>

      <header className="App-header">
      </header>
          </div>
      </div>
  );
}



export default App;
