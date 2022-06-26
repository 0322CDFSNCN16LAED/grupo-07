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
    
    loginUser: (req, res) => {
        res.render("login");
    },
    createUser: (req, res) => {
        res.render("register");
    },
    storeUser: (req, res) => {
        /// guardo usuario
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