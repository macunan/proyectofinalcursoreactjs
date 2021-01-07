Tarea 2 Entrega
DESAFÍO - EXPIRA EL LUNES 11/01/2021 23:59HS
Desafío: Menú e-commerce
3. JSX & transpiling


Buenas acá la tarea 2

1) ~/ecommerce/src/components -->archivo de NavBar.js

junto con algunas imagenes
~                                                                                      macunan@odroidc1:~/ecommerce/src/components$                                                                                              │1.jpg  cart.gif  NavBar.js
~                                                                                    │macunan@odroidc1:~/ecommerce/src/components$

2) otro archivo de interes es App.js ubicado en src (Donde se muestra el hermoso menu Aplausos en el fondo)


-No se subio el directorio node_modules porque en clases se nos pidio no subirlo


Se trato de usar Componentes de biblioteca bootstrap creo que fue instalado con npm install bootstrap react-bootstrap

 Si se pudiera resumir el desafio creo que el contenido de NavBar.js es el nucleo junto con instalar las bibliotecas correctas y incluir las imagenes con import fue la clave para mi.

 Se adjunta el contenido de NavBar.js para facilidad:


import React from 'react';
import image from './1.jpg'
import cart from './cart.gif'
import { Navbar, NavItem, NavDropdown,MenuItem,Nav,Form,FormControl,Button} from 'react-bootstrap';

const NavBar = () => {
   return (





    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Frutos Secos Mauro</Navbar.Brand>
  <a class="navbar-brand" href="#">
      <img src={image} alt="logo" width="80"></img>
  </a>
        <Nav className="mr-auto">
      <Nav.Link href="#frutos">Frutos</Nav.Link>
      <Nav.Link href="#Verduras">Verduras</Nav.Link>
      <Nav.Link href="#Contacto">Contacto</Nav.Link>
          <Nav.Link href="#carrito"> Carrito de compras
              <p>
  <a class="navbar-brand" href="#">
      <img src={cart} alt="logo" width="80"></img>
          </a>
              </p>
              </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Busqueda" className="mr-sm-2" />
      <Button variant="outline-info">Busqueda</Button>
    </Form>
  </Navbar>




   )
}


export default NavBar;



