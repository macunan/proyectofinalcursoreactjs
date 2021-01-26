DESAFÍO - EXPIRA EL LUNES 27/01/2021 23:59HS
Desafío: Primera Entrega
Tarea7
En modo resumen:



To make dropdown menu and other js stuff work in 4th Bootstrap you need just follow next steps: install with npm to dependencies:


Para que funcione el dropdown de NavBar
Se tomaron los siguientes pasos
npm i --save bootstrap jquery popper.js

Agregar a  index.js lo siguiente

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


En la entrega se incluye lo siguiente:

-Codigo fuente  que se puede encontrar:
https://github.com/macunan/tarea7primeraentrega
mp4 de navegación pues sistema no me dejo subir gif de navegación porque pesaba mas de 10Mb

1) En /src/App.js se incluye la información de Router
se adjunta acá para facilitar la correción, pero se encarga de direccionar como definido:


import './App.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js'
// Did at  npm install  bootstrap react-bootstrap in project base directory
 import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
     // <ItemListContainer name={mensaje} />
import {BrowserRouter,Switch,Route} from 'react-router-dom';

const mensaje = "Bienvenido al paraiso de las frutas secas, nosotros secamos con amor";
function App() {
  return (

        <BrowserRouter>
<NavBar/>
    <Switch>
        <Route exact path="/">
            <ItemListContainer name="Escoger Producto a Comprar"/>
                </Route>
                    <Route path="/categories/:categoryid">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/categories">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/item/:itemid">
                        <ItemDetailContainer/>
                        </Route>
                            </Switch>
      <header className="App-header">
      </header>
    </BrowserRouter>
          );
}



export default App;


2) En src/components/NavBar.js Se incluyen los Links para el menu de navegación

Ejemplo de código para cuando el usuario hace click en logo lo devuelva a la página principal:

    <Navbar.Brand>

<Link to={`/`}>
       <img src={image}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />


3) Para el manejo de category se agrego al json de la entrega el categoryid a cada elemento verduras y frutos , verduras tienen categoryid 1 y frutos tienen categoryid 2
La lógica toma lugar en src/components/ItemListContainer.js

En App.js se agrego

                    <Route path="/categories/:categoryid">
                        <ItemListContainer/>
                        </Route>

y en ItemList se obtiene la variable con :
const {categoryid}=useParams();
En dicho oscuro lugar de programación y lamento se maneja la lógica de si variable categoryid esta seteada junto con filtrar si corresponde o simplemente mostrar todos los items.

Lo anterior se maneja con lo siguiente:


// se muestra todo si la categoria no es importante
    if (!categoryid) {

    console.log("In the function dude");
      ListTemplate = items.map(item=><Item key={item.id} jsonpack={item} />);


    }

  //  Si se debe  filtrar por categoria acá se hace el filtro gracias a dios por método filter me costo mucho encontrarlo, deberían mencionarlo en clases o ponerlo en las ppts del curso es sumamente util y genial.
else {
    console.log(categoryid);
    ListTemplate=items.filter(item=>item.categoryid==categoryid).map(filteredName=>(<Item key={filteredName.id} jsonpack={filteredName}/>));


}





4) Bueno para procesar los items/1 o item/2 utilice el arreglo como se menciono en la ayudantia

En Apps.js


                    <Route path="/item/:itemid">
                        <ItemDetailContainer/>
                        </Route>


En ItemDetailContainer se obtiene el itemid
const {itemid}=useParams();

Después se obtiene el hermoso array con los productos que nos interesa a nosotros:
setProducto(response[itemid-1]);
Es necesario la resta por el hecho que los arreglos comienzan de cero ;-)

Después para mostrar el producto llamamos al hermoso ItemDetail de la otra vez, me encanta reciclar y ayudar al planeta hahaha (Chiste muy fome por favor ignorar una flor ha fallecido debido a ese chiste)
            <ItemDetail  jsonpack={producto} />

Creo que eso es la entrega a grandes rasgos, me falta mejorar un poco la parte grafica, pero a medida que avanzo en las entregas voy a ir mejorando eso.


¡Muchas gracias por revisar saludos !




