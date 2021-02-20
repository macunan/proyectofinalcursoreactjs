import {getFirestore} from '../firebase';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Badge,Table,Button,InputGroup,FormControl} from 'react-bootstrap';
import React, {useState,useEffect,useContext,createContext} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import DelButton from './DelButton';
import firebase from 'firebase/app';
import '@firebase/firestore';
const Cart = () => {
    const {carts,cartlength,clear,total,removeitem}=useContext(CartContext);
    const [order,setOrder]=useState();
    const [orderid,setOrderid]=useState();
    const [error,setError]=useState();
    const [email,setEmail]=useState("");
    const [email2,setEmail2]=useState("");
    const [phone,setPhone]=useState("");
    const [name,setName]=useState("");
    const [apellido,setApellido]=useState("");

var dudeid;
 function onApellidoChange(evt) {
    setApellido(evt.target.value);
  }

 function onPhoneChange(evt) {
    setPhone(evt.target.value);
  }
 function onNameChange(evt) {
    setName(evt.target.value);
  }
 function onEmailChange(evt) {
    setEmail(evt.target.value);
  }

 function onEmailChange2(evt) {
    setEmail2(evt.target.value);
  }




let goodarray=[];
let copyarray=[];
let ListTemplate;
let i=0;
    useEffect(()=>{
setOrder(
    {
        buyer:{name,apellido,phone,email},
        items:goodarray,
        date:firebase.firestore.Timestamp.fromDate(new Date()),
total:total()
    }
)
    },[email] )

    if(cartlength()>0){
let itemidarray=[];

        while(i<carts.length)
        {
copyarray[i]=carts[i];
itemidarray[i]=carts[i].itemid;
i++;
        }


itemidarray = [...new Set(itemidarray)];
        i=0;
        let id;
        let j=0;
        let price;
        let name;
while(i<itemidarray.length)
{
   let  cantidad=0;
    for (j=0;j<copyarray.length;j++)
    {
  if(copyarray[j].itemid==itemidarray[i])
        {
cantidad=copyarray[j].count+cantidad;
price=copyarray[j].itemprice;
name=copyarray[j].productname;
        }

    }

id=itemidarray[i];
goodarray.push({id,name,cantidad,price})

i++;
}






    const  InsertOrder =({goodarray})=>{


let orderid;


        console.log('Inside InsertOrder function'+order);
        const db=getFirestore()
            const orderDb=db.collection('orders')
        orderDb.add(order).then(({id})=>
            {
orderid=id;

                // dudeid=id//SUCESS
            }).catch(err=>{
                    setError(err);
                }).finally(()=>{
        alert("Enhorabuena su pedido ha sido ingresado, correo de confirmación sera enviado a la brevedad, el número de orden es el siguiente:"+orderid);
                });


    }



         ListTemplate=goodarray.map((element)=>(<tr key={element.id}><td>{element.name}</td><td>{element.cantidad}</td><td>{element.price}</td><td><DelButton itemid={id}/></td></tr>));

console.log("goodarray:"+goodarray[0].id);
        return (
        <>
       <Table striped bordered hover variant='dark'>
  <thead>
    <tr>
      <th>Item</th>
      <th>Cantidad</th>
      <th>Precio Unitario</th>
      <th>Quitar Item</th>
    </tr>
  </thead>
  <tbody>
      {ListTemplate}
        <tr>
      <td>Total a Pagar:</td>
      <td colSpan='1'></td>
      <td colSpan='1'></td>
    <td>{total()}</td>
    </tr>
  </tbody>
            </Table>








            <div id='test5'  align='center'>
                <label label style={{ color: 'white' }}>Ingresa nombre para procesar tu compra:</label>
  <br />
      <input type = 'text' name = 'name'    onChange={evt => onNameChange(evt)} ></input>
  <br />

                <label label style={{ color: 'white' }}>Ingresa Apellido para procesar tu compra:</label>
  <br />
      <input type = 'text' name = 'apellido'    onChange={evt => onApellidoChange(evt)} ></input>
          <br/>

      <label label style={{ color: 'white' }}>Ingresa Fono para procesar tu compra:</label>
  <br />
      <input type = 'text' name = 'phone'    onChange={evt => onPhoneChange(evt)} ></input>
  <br />
      <label label style={{ color: 'white' }}>Ingresa correo para finalizar Compra:</label>
  <br />
                    <input type = 'text' name = 'email'    onChange={evt => onEmailChange(evt)} ></input>
  <br />
      <label label style={{ color: 'white' }}>Ingresa correo nuevamente  para confirmar:</label>
  <br />
                    <input type = 'text' name = 'email2'    onChange={evt => onEmailChange2(evt)} ></input>
  <br />


      <br />

  <Button type='submit' variant='outline-secondary'    disabled={!(name != "" && apellido !="" && phone != "" && email != "" && email2 != "" && email == email2)}  onClick={()=>InsertOrder({goodarray})}>Finalizar tu Compra</Button>
      </div>





           </>
    )
    }
    else
    {
        return(

            <Badge variant='secondary'>Vuestro Carro se encuentra vacio por favor escoger items


                <Link  to={'/categories'}>

                <button>Volver</button>
                    </Link>
                    </Badge>

        )



    }


}


export default Cart;


