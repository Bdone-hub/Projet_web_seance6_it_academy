let Panier = require('./panierModel')

class User{
    constructor(id){
        this.id=id;
    }
    addPanier(){
        this.panier = new Panier();
    }
    getPanier(){
        return this.panier;
        
    }
    addPseudo(pseudo){
        this.pseudo = pseudo;
    }
    getPseudo(){
        return this.pseudo;
    }
    getId(){
        return this.id;
    }
}

module.exports = User;