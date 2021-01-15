import ItemCount from './CountContainer';


const ItemListContainer = ({name}) => {
   return (

       <div name="test">



    <div class="p-3 mb-2 bg-dark text-white">
        {name}



           <ItemCount product_name='Paquete de Zanahorias Deshidratas' stock={5} initial={1} />
               <ItemCount product_name='Paquete de Berenjena Deshidratas' stock={9} initial={1} />

        </div>



           </div>
   )
}


export default ItemListContainer;


