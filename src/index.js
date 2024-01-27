import app from './app.js';
import database from './databases.js';
app.listen(process.env.PORT,()=>{
    console.log('Server on port'+process.env.PORT);
})

//nodemon sirve para que este escaneando en tiempo real lo que esta pasando y que también se esten ejecutando los cambios en el navegador.
//morgan 
//Ejs motor de vistas o platillas en html