

const db = require("../data/db");
const products = db.getProducts();
const comments = db.getComments();



const mainController = {
  home: function (req, res) {
    res.render("home",{ products:products });
  },
  register: function (req, res) {
    res.render("register")
  },
  login: function (req, res) {
    res.render("login")
  },
  nosotros: function (req, res) {
    res.render("nosotros")
  },
  escuelas: function (req, res) {
    res.render("escuelas")
  },
  carrito: function (req, res) {
      res.render("carrito")
  },
  creacion: function (req, res) {
    res.render("crear-productos")
  },
  contacto: function (req,res){
    res.render("contacto",{comments:comments});
  }
};


module.exports = mainController