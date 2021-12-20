let express = require('express');

let router = express.Router();

let userController = require('./controller/userController');
let panierController = require('./controller/panierController');
let catalogueController = require('./controller/catalogueController');

var mysql = require("mysql");

var connection = mysql.createConnection({          //connection à la DB
    host: 'localhost',
    user: 'baudouin',
    password:'baudouinbaudouin',
    database: 'it_academy'
});

router.get('/', catalogueController.home);        //HomePage

router.get('/loginpage', catalogueController.loginpage); //renvoie vers la page de connection

router.post('/login', userController.sessionLogin);  //premiere connection

router.post('/login2', userController.sessionLogin2); //neme connection                   TO DOOOOOOOOOOOOOOOOOOO

router.get('/voirpanier', panierController.voirPanier) 

router.get('/addpanier/:formaid', panierController.addPanier);

router.get('/removepanier/:formaid', panierController.removepanier);
 


module.exports = router;