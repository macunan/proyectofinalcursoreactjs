DESAFÍO - EXPIRA EL MIÉRCOLES 10/02/2021 23:59HS
Desafío: Item Collection

Bueno en esta hermosa entrega empieza consta de los siguientes elementos:

Donde son definidos los siguientes elementos:
src/firebase/index.js

1) Donde se define la conexión que sacamos del sitio firebase

const app=firebase.initializeApp({
        apiKey: "AIzaSyAXMrXC-q8Dbp-wZuOene0jXqOk-ZcaNXQ",
    authDomain: "frutossecosdonmauro.firebaseapp.com",
    databaseURL: "https://frutossecosdonmauro-default-rtdb.firebaseio.com",
    projectId: "frutossecosdonmauro",
    storageBucket: "frutossecosdonmauro.appspot.com",
    messagingSenderId: "453287166757",
    appId: "1:453287166757:web:06fa8c6e1311d4244a90cc"
});
export function getFirebase(){
return app;

}

export function getFirestore(){
return firebase.firestore(app)
}



2) En ItemListContainer.js se llama a nuestra función creada

import {getFirestore} from '../firebase';

Se se filtra por categoryid en caso que este definida usando un if para entrar
y usando where

const highprice=db.collection("items").where('categoryid','==',categoryid);


en caso que categoryid no este definido se obtinenen todos los registros
itemCollection.get().then((querySnapshot)=>{


const ItemListContainer = ({name}) => {
y se usa UseEffect como visto en clases:
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

3)  se guardan los objetos localmente para que se puedan acceder y utilizar como siempre:
            setItems(querySnapshot.docs.map(doc=>doc.data()));
y volvimos a la normalidad y se puede ver detalle de item y categorias.


  ¡Gracias por revisar y saludos !
