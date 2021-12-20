const Panier = require('../model/panierModel');
let User = require('../model/panierModel');
const userController = require('./userController');

var panier;
var users = [];

var mysql = require("mysql");
const { query } = require('express');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'it_academy'
});

exports.createPanier = function(inUser){       //
    users.push(inUser);                        //ajoute l'utilisateur à la liste
    inUser.addPanier(new Panier());            //nouvelle instance de la classe Panier
} 

exports.voirPanier = function(req, res){
    panier = getPanierById(req.session.id);
    if (panier.getListLenght()>0){
        let sql = "SELECT * FROM formations WHERE idformation IN (";
        let list = panier.getList();
        list.forEach(elem =>{
            sql+="?,";
        });
        sql = sql.slice(0,-1);
        sql+=")";
        connection.query(sql,panier.getList(), function(error, result){
            if (error){console.log(error);};
            res.render('panier.ejs',{list:result});
        });
    }
    else{
        res.render('panier.ejs',{list:[]});
    }
};
getPanierById = function(id){
    for (var i=0;i<users.length;i++){
        if (users[i].getId()==id.toString()){
            return users[i].getPanier();
        }
    }   
}

exports.addPanier = function(req, res){
    panier = getPanierById(req.session.id);
    if (!(panier.contains(parseInt(req.params.formaid)))){
        panier.add(parseInt(req.params.formaid));
    }
};

exports.removepanier = function(req,res){
    panier = getPanierById(req.session.id);
    panier.remove(req.params.formaid);
    res.redirect('/voirpanier');
};
