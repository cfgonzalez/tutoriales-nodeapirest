'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;
//---------------------------------------------------------------------------

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//---------------------------------------------------------------------------
//verbos
app.get('/hola/:name', (req, res) => {
    res.send({message: `Hola ${req.params.name}`});
});

//---------------------------------------------------------------------------
// Startup del server
app.listen(port, () => 
{
    console.log(`API REST corriendo en http://localhost:${port}`);
});

