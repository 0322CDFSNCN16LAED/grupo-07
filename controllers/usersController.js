const path = require('path');
const fs = require('fs');
const db = require("../data/db");

const users = db.getUsers();

const usersController = {
    loginUser: (req, res) => {
        res.render("login");
    },
    detailUser: (req, res) => {
        res.render("user-detail");
    },
    createUser: (req, res) => {
        res.render("register");
    },
    /// guardo usuario
    storeUser: (req, res) => {
        const newUser=req.body;
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