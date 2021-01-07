import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// Did at  npm install  bootstrap react-bootstrap in project base directory
 import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
 <NavBar/>

      <header className="App-header">
      </header>
    </div>
  );
}


// <img src={logo} className="App-logo" alt="logo" />
        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        // </a>

export default App;
