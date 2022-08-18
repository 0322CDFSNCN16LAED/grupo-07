const data = require("../../data/db");
//const products = db.getProducts();
//const comments = db.getComments();
const db = require('../database/models');




const mainController = {
  home: function (req, res) {
    const products = data.getProducts();
    res.render("home", { products: products });
  },
  register: function (req, res) {
    res.render("register");
  },
  login: function (req, res) {
    res.render("login");
  },
  nosotros: function (req, res) {
    res.render("nosotros");
  },
  escuelas: function (req, res) {
    res.render("escuelas");
  },
  carrito: function (req, res) {
    res.render("carrito");
  },
  creacion: function (req, res) {
    res.render("crear-productos");
  },
  contacto: function (req, res) {
    db.Comments.findAll()
        .then((comments)=>{
            res.render("contacto", {comments: comments})
        });
    },
  storecoment: function (req, res) {
    db.Comments.create({
      ...req.body,
    })

    res.redirect("contacto");
  },
};

module.exports = mainController;