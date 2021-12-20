let User = require('../model/userModel')

let users;
let user;

exports.importUsers = function(userlist){
users = userlist;
}

exports.sessionLogin = function(req, res){
    user = getUser(users, req.session.id)
    console.log("4" + user);
    user.addPseudo(req.body.pseudo);        //ajout d'un pseudo à l'id du user
    req.session.user = user.pseudo;         
    res.redirect('/');
};

exports.sessionLogin2 = function(req, res){  
    user = getUser(users, req.session.id)
    user.addPseudo(req.body.pseudo);
    req.session.user = user.pseudo;
    res.redirect('/finaliser');
};

getUser = function(userslist, id){
    for (var i=0;i<userslist.length;i++){
        if (userslist[i].getId()==id.toString()){
            return userslist[i];
        }
    }   
}