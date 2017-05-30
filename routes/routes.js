'use strict'

const express = require('express');
const api = express.Router();
const auth = require('../middlewares/authorizationMiddleware');
const ProductControllers = require('../controllers/productController');
const UserControllers = require('../controllers/userController');
//---------------------------------------------------------------------------
//rutas
api.get('/product', auth.isAuth, ProductControllers.getProducts);
api.get('/product/:productId', auth.isAuth, ProductControllers.getProduct);
api.post('/product', auth.isAuth, ProductControllers.saveProduct);
api.put('/product/:productId', auth.isAuth, ProductControllers.updateProduct);
api.delete('/product/:productId', auth.isAuth, ProductControllers.deleteProduct);

api.post('/signup', UserControllers.signUp);
api.post('/signin', UserControllers.signIn);

api.get('/private', auth.isAuth, function(req, res){
    res.status(200).send({message: 'Tienes acceso'});
});

module.exports = api;