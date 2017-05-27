'use strict'

const config = require('./config');
const app = require('./app');
const mongoose = require('mongoose');
const port = config.port;


//---------------------------------------------------------------------------
// Startup del server

mongoose.connect(config.db, (err, res)=>{
    
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



