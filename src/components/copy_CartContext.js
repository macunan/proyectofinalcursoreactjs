
import React,{createContext,useState,useContext} from 'react';
import CartWidget from './CartWidget';
import NavBar from './NavBar';
export const  CartContext=React.createContext();
// export const useCartContext=()=>useContext(CartContext);

export const CartProvider = ({children}) => {
    const [total,setTotal]=useState(0);
    const[cart,setCart]=useState([]);
    const  additem=({itemid},{count},{itemprice})=>{
let cart2;
        cart2=cart;
    if(!cart){
        cart.push({itemid,count,itemprice});
        }
        else{
            // Se agraga item en caso de ya existir
            if(isInCart({itemid}))
                {
cart2[isInCartIndex({itemid})].count=cart2[isInCartIndex({itemid})].count+count;
               cart=cart2;
                }
                else
            {
                cart2.push({itemid,count,itemprice});
           cart=cart2;
            }
        }
// removeItem({itemid}); prueba paa sacar un itemid del carro
// clear(); prueba para limpiar el carro completamente
}


    const removeItem=({itemid})=>{
let i=0;
let cart2=[];
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
        if(!cart)
            return false;


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



const SumItems=()=>{
let sum=0;
let i=0;
    if(cart.length){
        while(i<cart.length)
        {
sum=cart[i].count+sum;
i++;
        }
console.log("llamando carrito desde SumItems");
        setTotal(sum);
        return sum;

    }


    else {
return false;

    }

}



const sumPriceTotal=({})=>{

let i=0;
let sum=0;
    if(cart.length){


        while(i<cart.length)
        {
sum=cart[i].itemprice*cart[i].count+sum;
i++;
        }
return sum;


}

else return false;
}





    return (<CartContext.Provider value={{cart,additem,removeItem,clear,isInCart,isInCartIndex,SumItems,total}}> {children}
    </CartContext.Provider>)
}
