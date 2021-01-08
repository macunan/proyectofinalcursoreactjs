import React from 'react';
import image from './1.jpg'
import cart from './cart.gif'
import { Navbar, NavItem, NavDropdown,MenuItem,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Carrito from './CartWidget.js';
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


 <Carrito/>
       </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Busqueda" className="mr-sm-2" />
      <Button variant="outline-info">Busqueda</Button>
    </Form>
  </Navbar>





    )
}






export default NavBar;
