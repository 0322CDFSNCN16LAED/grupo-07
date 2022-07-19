const path = require("path");
const fs = require("fs");
const db = require("../data/db");
const bcrypt = require("bcryptjs");
const users = db.getUsers();
const findBF = db.findByField();
const { validationResult } = require("express-validator");

const usersController = {
  // Registro: Creación usuario
  createUser: (req, res) => {
    res.render("register");
  },

  // Registro: Guardado usuario
  storeUser: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const newUser = req.body;
      newUser.category = "user";
      newUser.password = bcrypt.hashSync(newUser.password, 10);
      if (req.file) {
        newUser.image = "/data/usersimages/" + req.file.filename;
      } else {
        newUser.image = "/data/usersimages/default-user.png";
      }

      if (users.length) {
        newUser.id = users[users.length - 1].id + 1;
      } else {
        newUser.id = 1;
      }

      users.push(newUser);

      db.saveUsers(users);

      res.redirect("/users/login");
    } else {
      res.render("register", { errors: errors.array(), old: req.body });
    }
  },

  // Log In
  loginUser: (req, res) => {
    return res.render("login");
  },

  loginProcess: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      let userToLogin = db.findByField("email", req.body.email);
      if (userToLogin) {
        const passwordOk = bcrypt.compareSync(
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
    return res.render("profile", {user: req.session.userLogged});
  },

  editUser: (req, res) => {
    
    let id = req.params.id;
    
    let userToEdit = users.find((user) => user.id == id);

    res.render("edit-user", {user: userToEdit})
  },

  updateUser: (req, res) => {

    const userIndex = users.findIndex((user)=> user.id == req.params.id);
        
    let userEdited = req.body;

    if (req.file) {
      userEdited.id= users[userIndex].id;
    
      users[userIndex]= userEdited;
  
    }    
    db.saveUsers(userEdited);
    
    res.redirect("/users/profile", {user: userEdited});
  }
};

module.exports = usersController;