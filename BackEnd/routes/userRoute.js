const route = require('express').Router();

const {authUser, registerUser, loggoutUser }    = require('../controller/userController.js');

route.post('/register',registerUser);
route.post('/login', authUser);
route.get('/logout', loggoutUser);


module.exports = route;