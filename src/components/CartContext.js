
import React,{createContext,useState} from 'react';
export const  CartContext=createContext({});
export const CartProvider = ({children}) => {
const[carts,setCarts]=useState([]);
// const  additem=({productname},{itemid},{count},{itemprice})=>{
//     if(!isInCart({itemid}))
//     {
//     setCarts([...carts,{itemid,productname,count,itemprice}]);
//     console.log("Is in cart itemid"+itemid);
//     console.log("Is in cart"+isInCart({itemid}));
//    return true;
//     }
//     return false;


//     }



const  additem=({productname},{itemid},{count},{itemprice})=>{
    setCarts([...carts,{itemid,productname,count,itemprice}]);
    }






    const  removeitem=({itemid})=>{
     console.log("inside removeitemid"+itemid);
        setCarts(carts.filter(cart=>cart.itemid!=itemid));
    }

    const  cartlength=()=>{
        let sum,i;
        sum=0;
        i=0;
        if(carts.length){
            while(i<carts.length){
  sum=carts[i].count+sum;
           i++;
            }
            return sum;
        }
        else {
return 0;
        }
    }

const clear=()=>{
setCarts([]);
}


const total=()=>{

        let sum,i;
        sum=0;
        i=0;
        if(carts.length){

            while(i<carts.length){
  sum= carts[i].count*carts[i].itemprice+sum;
           i++;
            }
            return sum;
        }
        else {
return 0;
        }

}



    const isInCart=({itemid})=>{
let i=0;
        if(!carts)
            return false;


        if(carts.length)
        {


            while(i<carts.length)
            {
                if(carts[i].itemid===itemid)
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

        if(carts.length)
        {


            while(i<carts.length)
            {
                if(carts[i].itemid===itemid)
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





    return <CartContext.Provider value={{carts,additem,removeitem,cartlength,clear,total,isInCartIndex}}> {children}
    </CartContext.Provider>
}
