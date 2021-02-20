import ItemCount from './CountContainer';
import ItemList from './ItemList';
import Item from './Item';
import { useParams } from "react-router-dom";
import React, {useState,useEffect} from 'react';
import {getFirestore} from '../firebase';

const ItemListContainer = ({name}) => {
const {categoryid}=useParams();
    const[item,setItem]=useState([])
    useEffect(()=>{
 const db=getFirestore();
console.log("categoryid en ItemListContainer"+categoryid)
if(categoryid)
        {
        const highprice=db.collection("items").where('categoryid','==', parseInt(categoryid));
            highprice.get().then((querySnapshot)=>{
                console.log("In categoryid:"+categoryid);
      if(querySnapshot.sise===0)
                {
console.log("No results!");
            }
            setItem(querySnapshot.docs.map(doc=>doc.data()));
        }).catch((error)=>{
            console.log("Error searching items",error);
        }).finally(()=>{
        });


        }

        else {

        const itemCollection=db.collection("items");
        itemCollection.get().then((querySnapshot)=>{
      if(querySnapshot.sise===0)
            {
console.log("No results!");
            }
            setItem(querySnapshot.docs.map(doc=>doc.data()));
        }).catch((error)=>{
            console.log("Error searching items",error);
        }).finally(()=>{
        });


        }

    },[categoryid]);
console.log("item length in ItemListContainer"+item.length)

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


