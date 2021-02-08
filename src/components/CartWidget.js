import { Nav} from 'react-bootstrap';
import cart from './cart.jpg'
import {CartContext} from './CartContext';
import { Link } from "react-router-dom";
import React, {useState,useEffect,useContext,createContext} from 'react';
export const Carrito = () => {


const {carts,cartlength,clear}=useContext(CartContext);
    console.log("Valor de total en widget");
    console.log("Loading Cartwidget");
    return (


        <Nav.Link href='#'> Cantidad de items en carrito :{ cartlength()>0 && cartlength()}
                <Link  to={'/cart'}>
            <img src={cart} alt="logo" width="30"></img> </Link>
                </Nav.Link>

   )
}






