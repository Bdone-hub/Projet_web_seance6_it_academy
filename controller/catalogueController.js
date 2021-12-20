const { application } = require('express');
let userController = require('../controller/userController');
const User = require('../model/userModel');
let panierController = require('../controller/panierController');


var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'it_academy'
});


var users = [];
var usersId =[];

exports.home = function(req, res) {
    connection.query("SELECT * FROM formations;", function(error, result){
        if (error) console.log(error);
        res.render('home.ejs', {list_forma : result});
        console.log("1) " + usersId);
    })
    if (!(usersId.includes(req.session.id))){
        usersId.push(req.session.id);
        user = new User(req.session.id); //crée un nouvel utilisateur si il n'est pas dans la liste
        console.log("2) " +user);       //crée un nouvel utilisateur si il n'est pas dans la liste
        users.push(user);                      //ajoute l'utilisateur à la liste
        panierController.createPanier(user);   //crée le panier unique de l'utilisateur 
        console.log("3) " +req.session.id);
    }
};

exports.loginpage = function(req,res){
    userController.importUsers(users);    //enregiste l'utilisateur
    res.render('connexion.ejs',{state:'connexion'})     //page de connection avec le status connexion afin de dire que c'est la 1ere fois
};