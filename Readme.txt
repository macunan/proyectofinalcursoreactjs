
DESAFÍO 9 - EXPIRA EL MIÉRCOLES 03/02/2021 23:59HS
Desafío: CartContext

Buenas, la lógica del desafio fue la siguiente:
 En App.js
1. a)
Se importa el CartProvider definido en CartContext.
import {CartProvider} from './components/CartContext';





b)

En App.js se abrazó CartProvider con el resto de los componentes de la applicación tal como un padre abraza a su hijos (Comedia Drum beat)
Como se muestra a continuación:


<CartProvider>
        <BrowserRouter>
<NavBar/>
    <Switch>
        <Route exact path="/">
            <ItemListContainer name="Escoger Producto a Comprar"/>
                </Route>
                    <Route path="/categories/:categoryid">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/categories">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/item/:itemid">
                        <ItemDetailContainer/>
                        </Route>
                    <Route path="/cart">
                        <Cart/>
                        </Route>
                        </Switch>
      <header className="App-header">
      </header>
          </BrowserRouter>
    </CartProvider>


2.En /src/ItemCount.js agregamos la función additem al momento de hacer click Agregar a carrito. Nota que additem se encuentra definida en CartContext.js



import {CartContext} from './CartContext';
const ItemCount=({min,max,count,stock,product_name,productid})=>{
const {itemid}=useParams();
const {additem,cart}=useContext(CartContext);

        <button disabled={count===0} id="but2" onClick={()=>additem({itemid},{count})}>Agregar a carrito</button>


3. Para observar el funcionamiento se puede revisar console.log que agrega los items junto con efectuar la distintas operaciones sobre el carrito. Nota que sólo navegando por el menu se mantiene el stock y operaciones del carrito.



4. El cerebro de la entrega el/la famosa CartContext.js se adjunta el código a continuación para facilidad de correción, se hacen las declaraciones correspondientes para Context. Cabe destacar que  el video de este chico me ayudo un montón, pues no pude ir a clase complementaría:
https://www.youtube.com/watch?v=xAhta1yZzwo



import React,{createContext,useState} from 'react';
export const  CartContext=createContext({});
export const CartProvider = ({children}) => {
let cart=[];
// const [cart,setCart]=useState([]);
const  additem=({itemid},{count})=>{
        if(!cart){
        cart.push({itemid,count});
        }
        else{
            // Se agraga item en caso de ya existir
            if(isInCart({itemid}))
                {
cart[isInCartIndex({itemid})].count=cart[isInCartIndex({itemid})].count+count;
        cart=cart;
                }
                else
                {
        cart.push({itemid,count});
        cart=cart;
                }
        }
// removeItem({itemid}); prueba paa sacar un itemid del carro
// clear(); prueba para limpiar el carro completamente
console.log("Contenido de cart en context mas abajo");
console.log(cart);
console.log("Largo de cart:"+cart.length);

}


    const removeItem=({itemid})=>{
let cart2=[];
let i=0;
        while(i<cart.length)
        {
            if(cart[i].itemid!=itemid)
            {

                cart2.push(cart[i]);
            }

            i=i+1;

        }

cart=cart2;
    }


    const clear=()=>{
cart=[];

    }





    const isInCart=({itemid})=>{
let i=0;

        if(cart.length)
        {


            while(i<cart.length)
            {
                if(cart[i].itemid===itemid)
                    return true;

i++;
            }

            return false;

        }

        else
        {
return false;

        }

    }


    const isInCartIndex=({itemid})=>{
let i=0;

        if(cart.length)
        {


            while(i<cart.length)
            {
                if(cart[i].itemid===itemid)
                    return i;

i++;
            }

            return false;

        }

        else
        {
return false;

        }

    }




    return (<CartContext.Provider value={{cart,additem,removeItem,clear,isInCart,isInCartIndex}}>
    {children}
    </CartContext.Provider>)
}




¡Saludos y gracias !
