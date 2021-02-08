
import { Badge,Table,Button} from 'react-bootstrap';
import React, {useState,useEffect,useContext,createContext} from 'react';
import {CartContext} from './CartContext';
import { Link } from "react-router-dom";
export const DelButton = ({itemid}) => {
const {removeitem}=useContext(CartContext);
console.log("Estoy en DelButton con itemid:"+itemid);

 // <button disabled={count===0} id="but2" onClick={()=>additem({productname},{itemid},{count},{itemprice})}>Agregar a carrito</button>
return(
    <button  onClick={()=>removeitem({itemid})}>Eliminar Item</button>
)

};



export default DelButton;
