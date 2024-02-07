const route = require('express').Router();

const {authUser}    = require('../controllers/userController');

route.post('/register',authUser);