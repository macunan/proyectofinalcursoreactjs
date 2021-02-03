import {Button,ButtonGroup,Table} from 'react-bootstrap';
import React, {useState,useEffect,useContext} from 'react';
import {CartContext} from './CartContext';
import {useParams} from "react-router-dom";
const ItemCount=({min,max,count,stock,product_name,productid})=>{
const {itemid}=useParams();

const {additem,cart}=useContext(CartContext);


        // <Button variant="secondary"   disabled={ count===0}  onClick={onAdd} align="center">Agregar al Carrito</Button>
    return (
<>
        <p></p>
        <p></p>
        <ButtonGroup aria-label="Basic example">
        <Table striped bordered hover variant="dark" size="sm" align="center" >
  <thead style={{ width: '18rem' }}>
    <tr>
      <th></th>
      <th style={{ width: '18rem' }}>{product_name}</th>
      <th>      </th>
    </tr>
  </thead>
  <tbody style={{ width: '18rem' }}>
    <tr>
        <td>
    <Button variant="secondary"  onClick={min}>-</Button>
            </td>
      <td align="center">{count}</td>
          <td>
        <Button variant="secondary" onClick={max}>+</Button>
              </td>
    </tr>
    <tr>
      <td>  </td>
      <td align="center">
        <button disabled={count===0} id="but2" onClick={()=>additem({itemid},{count})}>Agregar a carrito</button>
</td>
      <td> </td>
    </tr>
  </tbody>
</Table>

</ButtonGroup>


</>
    );


};

export default ItemCount;

