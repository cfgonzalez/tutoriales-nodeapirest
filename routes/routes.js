'use strict'

const express = require('express');
const api = express.Router();
const auth = require('../middlewares/authorizationMiddleware');
const ProductControllers = require('../controllers/productController');
const UserControllers = require('../controllers/userController');
//---------------------------------------------------------------------------
//rutas
api.get('/product', ProductControllers.getProducts);
api.get('/product/:productId', ProductControllers.getProduct);
api.post('/product', ProductControllers.saveProduct);
api.put('/product/:productId', ProductControllers.updateProduct);
api.delete('/product/:productId', ProductControllers.deleteProduct);

api.post('/signup', UserControllers.signUp);
api.post('/signin', UserControllers.signIn);

api.get('/private', auth.isAuth, function(req, res){
    res.status(200).send({message: 'Tienes acceso'});
});

module.exports = api;