import React, {useState,useEffect,useContext,useParams} from 'react';
import {Card,Button} from 'react-bootstrap';
import  ItemCount from './CountContainer';
import {Link} from 'react-router-dom';
import Cart from './Cart';
export const ItemDetail =({jsonpack})=>{







if(jsonpack){
    return(
      <>
        <div id="centerman" align="center">

        <Card  border="light"  bg="dark" style={{ width: '18rem' }}
className="mb-2">

<Card.Header>

  <Card.Img variant="top"  src={jsonpack.pictureurl} />
            </Card.Header>
  <Card.Body>
      <Link to={`/item/${jsonpack.id}`}>

          <Card.Link href="#" >{jsonpack.title}</Card.Link>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
    <Card.Text>
        Cantidad disponible:{jsonpack.stock}
        </Card.Text>
  </Card.Body>
</Card>



    <ItemCount product_name={jsonpack.title} stock={jsonpack.stock} initial={1} productid={jsonpack.id} />

        </div>
      </>
    );

}

else {
    return(<></>);
}

};



