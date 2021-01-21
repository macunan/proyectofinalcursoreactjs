DESAFÍO - EXPIRA EL LUNES 25/01/2021 23:59HS
Desafío: Detalle de Producto
Tarea6
En modo resumen:
App.js--->ItemDetailContainer.js--->ItemDetail.js x-->CountContainer(solo para mostrar contador)-->ItemCount(solo para mostrar contador)


1) Desde App.js se carga ItemDetailContainer.js

2) Desde ItemDetailContainer se carga el item de mercado libre usando un fetch api y setTimeout de 2 segundos como solicitido. Una vez que se obtiene la información usando la Api se
llama  <ItemDetail key={item.id} jsonpack={item} /> que es encargado de mostrar el detalle del Item.

3) En ItemDetail se muestra la información de la api con el json que fue recibido de parametro, adidionalmente se agrego elemento para poder agregar al carro de compras "El contador" para dar realidad a la entrega


import  ItemCount from './CountContainer';




4) A continuación se adjunta el corazón de la entrega para facilidad de correción ItemDetail.js:




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



¡Gracias y muchos saludos !
