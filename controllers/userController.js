'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');
const tokenService = require('../services/tokenService');

function signUp(req, res){

    const user = new User({

        email: req.body.email,
        displayName: req.body.displayName,        

    });

    user.save((err) => {

        if(err) res.status(500).send({ message: `Èrror al crear el usuario ${err}`});

        return res.status(200).send({ token: tokenService.createToken(user)});
    });
}

function signIn(req, res){

    User.find({email: req.body.email}, (err, user) => {
        
        if(err) return res.status(500).send({message: err});
        if(!user) return res.status(404).send({message: 'No existe el usuario'});

        req.user = user;
        res.status(200).send({
            message:' te has logueado correctamente',
            token: service.createToken(user)
        });
    });
}


module.exports = {
    signUp,
    signIn
}