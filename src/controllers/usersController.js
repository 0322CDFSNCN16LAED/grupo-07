const path = require("path");
const datab = require("../../data/db");
const bcrypt = require("bcryptjs");
//const findBF = datab.findByField();
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { DEFAULT_ECDH_CURVE } = require("tls");

const usersController = {
  createUser: (req, res) => {
    res.render("register");
  },

  // Registro: Guardado usuario

  storeUser: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let newUser = req.body;
      if (req.file) {
        newUser.profile_image = "/images/users-images/" + req.file.filename;
      } else {
        newUser.profile_image = "/images/users-images/default-user.jpg";
      }
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
        res.render("register", { errors: errors.array(), old: req.body });
      })

    } else {
      res.redirect("/users/login");
    }
  },

  // Log In
  loginUser: (req, res) => {
    return res.render("login");
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

          res.redirect("/users/profile");
          return;
        }
      }
    }
    return res.render("login", { error: true });
  },

  //Usuario: Detalle

  detailUser: (req, res) => {
    return res.render("profile", { user: req.session.userLogged });
  },

  editUser: (req, res) => {
    
    db.Users.findOne({
      where: {id: req.params.id}
    })
    
    .then((userToEdit)=>{
      res.render("edit-user", { user: userToEdit });
    })

    .catch((error) => console.log(error));
  },

  updateUser: async (req, res) => {

    db.Users.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      dni: req.body.dni,
      image: newUser.profile_image,
      birthday: req.body.birthday,
      address: req.body.address,
    }, {
      where: {
        id: req.params.id
      }
    })
    
    .then(() => {
      res.redirect("/users/profile");
    })
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