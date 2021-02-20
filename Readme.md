ENTREGAFINAL - EXPIRA EL LUNES 02/03/2021 23:59HS

# Introducción
Este es un proyecto que usa ReactJs para visualizar una tienda de productos secos. Los datos son almacenados en google firestore y el projecto usa Reactjs
junto con Bootstrap,Link,Firestore. El usuario puede selecionar items para comprar que son mostrados por la aplicación, donde son almacenados en un carrito de compra donde el usuario puede procesar su orden.

# Requerimientos
Bootstrap Se puede instalar con:
npm install bootstrap react-bootstrap La razón fue que en clases y los tutores se nos pidio utilizar

Instalar Firebase:
npm install firebase@8.0.2

Router-dom se puede instalar con la siguiente:
npm install react-router-dom

Una vez instalados los paquetes señalados anteriormente el projecto deberían poder ejecutarse.


# Estructuras de datos son de tipo Json que son almacenados en Firestore
Resumiendo nuestro programa guarda datos de tipo item que describen los items para la venta y orders que son las ordenes realizadas por los clientes.

Ejemplo de estructura de tipo items

```javascript

categoryid:1
description:"Zanahorias secadas naturalmente bajo el sol, nada de quimicos y procesos adicionales, son ideales para hacer una rica casuela o bien para hacer arroz o acompañar ensalada de papas. Se puede dejar remojando por un par de horas y las zanahorias recuperan su textura natural. También un rico snack natural lleno de vitaminas y minerales como papas. Perfecto para llevar a campar duració estimada 3 años mas si no se expone a humedad"
(cadena)
id:1
pictureurl:
"https://www.northbaytrading.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/i/air_dried_cross_cut_carrots_650px_1.jpg"
price:5000
stock:2
title:"Zanahorias secas"
```
Anterior es ejemplo de estructura de item de la tienda fruto seco zanahoria.

También vuestro proyecto guarda las ordenes creadas por nuestros clientes

Estructura de tipo orders: 
```javascript
buyer:
apellido:"a"
email:"a"
name:"a"
phone:"a"
date:18 de febrero de 2021, 17:35:00 UTC-3
(marca de tiempo)
items:
0(elemento 0)
cantidad:1
id:"1"
name:"Zanahorias secas"
price:5000
elemento 1 de array de items
cantidad:2
id:"3"
name:"Manzana Seca"
price:5000
total:15000  (Total de cada orden)
```


# Arquitectura y relación entre components

Todo comienza desde Apps.js

Apps.js-->components->ItemListContainer-->ItemList-->Item-->ItemDetailContainer-->ItemDetail

Muchos de las funciones de CartContext son utilizados en ItemCount y Cart
CartContext-->ItemCount-->Cart

Adicionalmente cada componentes fue divivido en tareas y explicado con detalled en
https://github.com/macunan?tab=repositories

Desde Tarea 2 en adelante


# Demo


![Alt Text](https://github.com/macunan/proyectofinalcursoreactjs/blob/main/navegacion_proyectofinal.gif)


¡Saludos y gracias por corregir!
