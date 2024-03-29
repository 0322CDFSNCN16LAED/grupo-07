const bcrypt = require("bcryptjs");
//const findBF = datab.findByField();
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { DEFAULT_ECDH_CURVE } = require("tls");
const { default: isFQDN } = require("validator/lib/isFQDN");
const fs = require('fs')
const path = require("path");

const usersController = {
  createUser: (req, res) => {
    res.render("register", { user: req.session.userLogged });
  },

  // Registro: Guardado usuario

  storeUser: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let newUser = req.body;
      if (req.file) {
        newUser.profile_image = "/images/users-images/" + req.file.filename;
      } else {
        newUser.profile_image = "/images/users-images/default_user.jpg";
      }
      if(!db.Users.findOne({wher:{email:req.body.email}})){

                    db.Users.create({
                      first_name: req.body.first_name,
                      last_name: req.body.last_name,
                      email: req.body.email,
                      password: bcrypt.hashSync(req.body.password, 10),
                      dni: req.body.dni,
                      image: newUser.profile_image,
                      birthday: req.body.birthdate,
                      address: req.body.address,
                    })
                    .then(()=>{
                      res.redirect("/usuarios/login");
                    })}else{ error= [{msg:"Email ya registrado"}];
                             res.render("register", { errors: error , old: req.body, user: req.session.userLogged}); }
    } else {
      errors.array().forEach(error => {
                                error.param=='profile_image';
                                fs.unlinkSync(path.join(__dirname, "../../public/images/users-images/") + req.file.filename)
                                console.log('File removed')
                            })
                            
      res.render("register", { errors: errors.array(), old: req.body, user: req.session.userLogged});
    }
  },

  // Log In
  loginUser: (req, res) => {
    return res.render("login", {user: req.session.userLogged});
  },

  loginProcess: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let userToLogin = await db.Users.findOne({
        where: { email: req.body.email },
      });
      if (userToLogin) {
        let passwordOk = bcrypt.compareSync(
          req.body.password,
          userToLogin.password
        );
        if (passwordOk) {
          req.session.userLogged = userToLogin;
          if (req.body.recordame != undefined) {
            res.cookie("recordame", userToLogin.email, {
              maxAge: 60000,
            });
          }

          return res.render("profile", {user: req.session.userLogged});
          
        }
      }
    }
    return res.render("login", { error: true, user: req.session.userLogged });
  },

  //Usuario: Detalle

  detailUser: (req, res) => {
    return res.render("profile", {user: req.session.userLogged});
  },

  //Usuario: Edicion de datos

  editUser: async (req, res) => {
    const userToEdit = await db.Users.findOne({
      where: { id: req.params.id },
    });

    res.render("edit-user", { user: userToEdit});
  },

  updateUser: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      
          if (req.file) {
                await db.Users.update({image: "/images/users-images/" + req.file.filename},
                { where: {id: req.params.id}});
              }
          await db.Users.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            dni: req.body.dni,
            birthday: req.body.birthdate,
            address: req.body.address,
          },{ where: {id: req.params.id}});
        
          const useredited = await db.Users.findOne({
            where: { id: req.params.id }})

          res.render("profile", { user: useredited});

        } else {
          res.render("edit-user", { errors: errors.array(), old: req.body, user: req.session.userLogged})}
      },    

  logoutUser: (req, res) => {
    req.session.userLogged = null;
    res.redirect("/");
  },

  /*  destroy: (req, res) => {
    db.Users.findByPk(req.params.id).then()((user) => {
      user.remo
  });
} */
};
/* const userIndex = users.findIndex((user) => user.id == req.params.id);

    let userEdited = req.body;

    if (req.file) {
      userEdited.id = users[userIndex].id;

      users[userIndex] = userEdited;
    }
    datab.saveUsers(userEdited);

    res.redirect("/users/profile", { user: userEdited }); */

module.exports = usersController;