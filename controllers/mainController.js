
const db = require("../data/db");
const products = db.getproducts();
const coments = db.getComents();



const mainController = {
  home: function (req, res) {
    
    res.render("home",{ products:products});
  },
  productos: function (req, res) {
    const index=products.findIndex(products=> products.id==req.params.id)
    res.render("productos",{product:products[index]});
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
    res.render("contacto",{coments:coments});
  }
};


module.exports = mainController