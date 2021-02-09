import ItemCount from './CountContainer';
import ItemList from './ItemList';
import Item from './Item';
import { useParams } from "react-router-dom";
import React, {useState,useEffect} from 'react';
// import jsonpack from './data.json';
import {getFirestore} from '../firebase';
           // <ItemCount product_name='Paquete de Zanahorias Deshidratas' stock={5} initial={1} />
           //     <ItemCount product_name='Paquete de Berenjena Deshidratas' stock={9} initial={1} />

        // <Item jsonpack={test2} />
const ItemListContainer = ({name}) => {
const {categoryid}=useParams();
const[cat,setCat]=useState(categoryid);
    const[item,setItems]=useState([])
    useEffect(()=>{
        const db=getFirestore();
        const itemCollection=db.collection("items");
console.log("categoryid en ItemListContainer"+categoryid)
if(categoryid)
        {
        const highprice=db.collection("items").where('categoryid','==',categoryid);
        highprice.get().then((querySnapshot)=>{
      if(querySnapshot.sise===0)
            {
console.log("No results!");
            }
            setItems(querySnapshot.docs.map(doc=>doc.data()));
        }).catch((error)=>{
            console.log("Error searching items",error);
        }).finally(()=>{
        });


        }

        else {
        itemCollection.get().then((querySnapshot)=>{
      if(querySnapshot.sise===0)
            {
console.log("No results!");
            }
            setItems(querySnapshot.docs.map(doc=>doc.data()));
        }).catch((error)=>{
            console.log("Error searching items",error);
        }).finally(()=>{
        });


        }

    },[]);






             console.log(cat);

    return (

       <div name="test">
    <div class="p-3 mb-2 bg-dark text-white">
        {name}



        <ItemList items={item}/>



       </div>



           </div>
   )
}


export default ItemListContainer;


