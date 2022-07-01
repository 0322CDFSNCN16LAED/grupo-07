const path = require('path');
const fs = require('fs');
const db = require("../data/db");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const users = db.getUsers();

const usersController = {

    // Registro: Creación usuario
    createUser: (req, res) => {
        res.render("register");
    },
    
    /// Registro: Guardado usuario
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

    //Login
    loginUser: (req, res) => {
        res.render("login");
    },
  
    processLogin: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync("./data/users.json", {errors: errors.erros});
            
            let users;
            
            if (usersJSON == ""){
                users = []; 
            } else {
                users = JSON.parse(usersJSON);
            }

            let usuarioALogearse
            
            for (let i = 0; i < users.length; i++) {
                if (users[i].firstName == req.body.firstName){ //Si el nombre es el mismo
                    if (bcrypt.compareSync(req.body.password, users[i].password)) //Si la contraseña se verifica
                    usuarioALogearse = users[i];
                    break;
                }
            }
           
            if (usuarioALogearse == undefined){
                return res.render("login", {errors: [
                    {msg: "Credenciales invalidas"}
                ]});
            }
            
            req.session.usuarioLogueado = usuarioALogearse; 
            res.render("/");
            
            } else {
                return res.render("login", {errors: errors.erros}); 
            }       
    },

    //Usuario: Detalle
    detailUser: (req, res) => {
        res.render("user-detail"); // pagina sin hacer
    },

    //Usuario: Edición
    editUser: (req, res) => {
        /// edito usuario
    },

    //Usuario: Actualización cambios
    updateUser: (req, res) => {
        /// guardo usuario editado
    },

    //Usuario: Destrución 
    destroyUser: (req, res) => {
        /// elimino usuario
    },

}



module.exports = usersController;