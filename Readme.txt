DESAFÍO - EXPIRA EL LUNES 08/02/2021 23:59HS
Desafío: Cart View

Bueno en lo personal este desafio fue bastante desafiante

Consta de 4 partes principales

1) src/componentes/CartContext.js

En dicho archivo se declaran las funciones a utilizar junto con lo necesario para contexto


En especial los providers a exportar es como una pequeña fabrica japonesa que exporta sus productos a todo el mundo hahaha muy fome el chiste lo se sorry:



    return <CartContext.Provider value={{carts,additem,removeitem,cartlength,clear,total,isInCartIndex}}> {children}    </CartContext.Provider>
}

Para mantener el estado de carrito se usa

const[carts,setCarts]=useState([]);

y
    setCarts([...carts,{itemid,productname,count,itemprice}]);


para agregar y modificar el carrito con sus métodos asociados.
 y con carts podemos ver el contenido de carts en otras partes del programa.




2) En index.js se agrego el provider para cubrir toda nuestra applicación:

  <React.StrictMode>
<CartProvider>
    <App />
</CartProvider>
          </React.StrictMode>,



3) En CartWidget.js


Se muestra el contador de items con


        <Nav.Link href='#'> Cantidad de items en carrito :{ cartlength()>0 && cartlength()}
siempre y cuando es mayor que cero.
cartlength es un método creado en CartContext

Se adjunta la mayoría del condigo a continuación:


import {CartContext} from './CartContext';
import { Link } from "react-router-dom";
import React, {useState,useEffect,useContext,createContext} from 'react';
export const Carrito = () => {


const {carts,cartlength,clear}=useContext(CartContext);
    console.log("Valor de total en widget");
    console.log("Loading Cartwidget");
    return (


        <Nav.Link href='#'> Cantidad de items en carrito :{ cartlength()>0 && cartlength()}
                <Link  to={'/cart'}>
            <img src={cart} alt="logo" width="30"></img> </Link>
                </Nav.Link>

   )
}


4) El famoso carrito Cart.js

Si el carro tiene algo se muestra los contenidos del carrito.

    if(cartlength()>0){

mostrar contenidos
        }

Sino muestra que carrito se encuentra vacio.

     else {



<Badge variant="secondary">Vuestro Carro se encuentra vacio por favor escoger items.
         }


El algoritmo utilizado para mostrar los datos es un poco complejo.

Pero en resumen consta de los siguientes pasos:
a) obtiene un array sin itemid repetidos

esto fue muy cool no lo conocía
transformarlos a dato tipo set(conjuntos) para eliminar los repetidos para después transformarlo de vuelta.
itemidarray = [...new Set(itemidarray)];

b)Teniendo lo itemid unicos recorro mi carrito normal carts sumando la cantidad de items para cada itemid.

c) Ya agrupados por cantidad y precio y creancia religiosa los muestro al mundo usando array  goodarray y map.



         ListTemplate=goodarray.map((element)=>(<tr key={element.id}><td>{element.name}</td><td>{element.sum}</td><td>{element.price}</td><td><DelButton itemid={id}/></td></tr>));


También uso DelButton.js para borrar todos los elementos de un tipo a solicitud del cliente. El bóton se agraga a a la tabla.


return(
    <button  onClick={()=>removeitem({itemid})}>Eliminar Item</button>
)

};


Todo lo anterior lo muestro en una tabla.


Eso voy  a empezar con el próximo desafio porque este de verdad tomo mucho tiempo.

¡Saludos y muchas gracias por corregir !


