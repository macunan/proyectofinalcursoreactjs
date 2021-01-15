import { Nav} from 'react-bootstrap';
import React from 'react';
import cart from './cart.gif'

const Carrito = () => {
   return (


          <Nav.Link href="#carrito"> Carrito de compras
              <p>
  <a class="navbar-brand" href="#">
      <img src={cart} alt="logo" width="80"></img>
          </a>
              </p>
              </Nav.Link>




   )
}


export default Carrito;


