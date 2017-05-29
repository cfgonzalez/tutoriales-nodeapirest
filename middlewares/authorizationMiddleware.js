'use strict'

const services = require('../services/tokenService');


function isAuth(req, res, next){

    if(!req.headers.autorization){
        return res.status(403).send({message: 'no tienes autorización'});
    }

    const token = req.headerss.autorization.split(" ")[1];
    
    services.decodeToken(token)
        .then(response => {
            req.user = response;
            next();
        })
        .catch( response => {
            res.status(response.status);
        })
}


module.exports = {
    isAuth
};