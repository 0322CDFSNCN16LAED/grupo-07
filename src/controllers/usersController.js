const path = require("path");
const fs = require("fs");
const datab = require("../../data/db");
const bcrypt = require("bcryptjs");
const users = datab.getUsers();
//const findBF = datab.findByField();
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { DEFAULT_ECDH_CURVE } = require("tls");

const usersController = {
  // Registro: Creación usuario
  createUser: (req, res) => {
    res.render("register");
  },

  // Registro: Guardado usuario

  storeUser: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let newUser = req.body;
      if (req.file) {
        newUser.image = "/../data/users-images/" + req.file.filename;
      } else {
        newUser.image = "/../data/users-images/default-user.jpg";
      }
      let userImage = await db.UsersImages.create({
        url: newUser.image,
      });
      const user = await db.Users.create({
        fisrt_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        dni: req.body.dni,
        image_id: userImage.id,
        birthday: req.body.birthdate,
      });

      res.redirect("/users/login");
    } else {
      res.render("register", { errors: errors.array(), old: req.body });
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
    let id = req.params.id;

    let userToEdit = users.find((user) => user.id == id);

    res.render("edit-user", { user: userToEdit });
  },

  updateUser: (req, res) => {
    const userIndex = users.findIndex((user) => user.id == req.params.id);

    let userEdited = req.body;

    if (req.file) {
      userEdited.id = users[userIndex].id;

      users[userIndex] = userEdited;
    }
    datab.saveUsers(userEdited);

    res.redirect("/users/profile", { user: userEdited });
  },
};

module.exports = usersController;
