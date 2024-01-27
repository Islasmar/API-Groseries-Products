const express=require('express');
const app=express();//Creamos una función que actua como servidor.

app.listen(3500, ()=>{
    console.log('Server listening on the port 3500')
});

//nodemon sirve para que este escaneando en tiempo real lo que esta pasando y que también se esten ejecutando los cambios en el navegador.
//morgan 