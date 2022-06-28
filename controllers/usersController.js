const path = require('path');
const fs = require('fs');
const db = require("../data/db");
const bcrypt = require ('bcryptjs')

const users = db.getUsers();

const usersController = {
    loginUser: (req, res) => {
        res.render("login");
    },
    checkUser: (req, res) => {
       //Verificar usuario del login
    },
    detailUser: (req, res) => {
    //detalle del usuario
        res.render("user-detail"); // pagina sin hacer
    },
    //vista del registro
    createUser: (req, res) => {
        res.render("register");
    },
    /// guardo usuario
    storeUser: (req, res) => {
        const newUser=req.body;
        newUser.category= "user";
        newUser.password=bcrypt.hashSync(newUser.password,10);
        if(req.file) { 
           newUser.image = "/data/usersimages/"+ req.file.filename ;
        } else { 
            newUser.image ="/data/usersimages/default-user.png";
               }

        if (users.length) {
                newUser.id = users[users.length-1].id + 1;
        } else {
            newUser.id = 1;
        }
        
        users.push(newUser);

        db.saveUsers(users);

        res.redirect("/");
    },
    editUser: (req, res) => {
        /// edito usuario
    },
    updateUser: (req, res) => {
        /// guardo usuario editado
    },
    destroyUser: (req, res) => {
        /// elimino usuario
    },

}



module.exports = usersController;