import React from 'react';
import data from './data.json';
import {Card} from 'react-bootstrap';
import Item from './Item'








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

