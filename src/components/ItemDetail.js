
import React, {useState,useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';
import  ItemCount from './CountContainer';

const ItemDetail =({jsonpack})=>{
    console.log(jsonpack);
    return(
      <>
        <div id="centerman" align="center">
        <Card  border="light"  bg="dark" style={{ width: '18rem' }}
className="mb-2">

<Card.Header>

  <Card.Img variant="top"  src={jsonpack.thumbnail} />
            </Card.Header>
  <Card.Body>
    <Card.Title>{jsonpack.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
    <Card.Text>
        Cantidad{jsonpack.available_quantity}<p></p>
        </Card.Text>
  </Card.Body>
</Card>



        <ItemCount product_name={jsonpack.title} stock={jsonpack.available_quantity} initial={1}/>




        </div>
      </>
    )

};



export default ItemDetail;
