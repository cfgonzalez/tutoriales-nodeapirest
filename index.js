'use strict'

const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;


//---------------------------------------------------------------------------
// Startup del server

mongoose.connect('mongodb://localhost:27017/shop',(err, res)=>{
    
    if(err) 
    {
        return console.log(`Error al conectar a la base de datos: ${err}`);
    }
    console.log('Conexion a la BD establecida');

    //Listen del puerto 
    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port} --------->>>> OK <<< ---------`);
    });

});



