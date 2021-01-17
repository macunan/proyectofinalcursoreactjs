DESAFÍO - EXPIRA EL MIÉRCOLES 20/01/2021 23:59HS
Desafío: Catálogo con MAPS y Promises
Tarea5

En directorio componentes:
1) Se carga data.json en ItemListContainer.js se usa promise con demora de 2 segundos y hook.
2) Posteriormente se pasa json a ItemList.js

        <ItemList items={item}/>

3) Desde ItemList.js se usa map y el array de json para llamar Item.js que muestra cada item en json en pantalla.



Contenido de Itemlist


const ItemList = ({items}) =>{
    console.log(items);
    return (
        <>
        { items.map(item=>

            <Item key={item.id} jsonpack={item} />

        )}



        </>

    )
}

export default ItemList;



4) Contenido de Item.js que muestra cada item




import React from "react";
import {Card,Button} from 'react-bootstrap';
const Item =({jsonpack})=>{
  return(
      <>
      <Card  border="light"  bg="dark" style={{ width: '10rem' }}
className="mb-2">

<Card.Header>

  <Card.Img variant="top"  src={jsonpack.pictureurl} />
            </Card.Header>
  <Card.Body>
    <Card.Title>{jsonpack.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
    <Card.Text>
        Descripción<p></p>{jsonpack.description}
        </Card.Text>
  </Card.Body>
</Card>
      </>


    );

};



export default Item;




¡Gracias y saludos !
