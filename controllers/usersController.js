const path = require('path');
const fs = require('fs');
const db = require("../data/db");
const bcrypt = require('bcryptjs');
const users = db.getUsers();
const User = require("../data/User");
const { use } = require('../routes/products-router');


const usersController = {
    // Registro: Creación usuario
    createUser: (req, res) => {
        res.render("register");
    },
    
    // Registro: Guardado usuario
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

    // Log In
    loginUser: (req, res) => {
        return res.render("login");
    },

    loginProcess: (req, res) => {

        let userToLogin = User.findByField("email", req.body.email);

        if (userToLogin) {
            let passwordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (passwordOk){
                req.session.userLogged = userToLogin;
                return res.redirect("./users/profile/"+userToLogin.id);
            }
        }
    },

    //Usuario: Detalle
    profile: (req, res) => {
        return res.render("profile");
    },
    detailUser: function (req, res) {
        const index = users.findIndex(
            (users) => users.id == req.params.id
        );
        res.render("profile", { users: users[index],users:users });
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
    deleteUser: (id) => {
        let allUsers = this.findAll();
        let findUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ""));
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
    },


}



module.exports = usersController;