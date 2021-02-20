import React from 'react';
import data from './data.json';
import {Card} from 'react-bootstrap';
import Item from './Item'
import { useParams } from "react-router-dom";
const ItemList = ({items}) =>{
          let ListTemplate = items.map(item=><Item key={item.id} jsonpack={item} />);
console.log("array de items: en ItemList"+items.length);
    return (
        <>
  {ListTemplate}
        </>
    )
}
export default ItemList;

