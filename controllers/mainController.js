

const db = require("../data/db");
const products = db.getProducts();
const comments = db.getComments();


const mainController = {
  home: function (req, res) {
    const products = db.getProducts();
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
    const comments = db.getComments();
    res.render("contacto",{comments:comments});
  },
  storecoment: function (req,res){
    const newComent=req.body;
    console.log(req.body);
    if (comments.length) {
      newComent.id = comments[comments.length-1].id + 1; 
        } else {
          newComent.id = 1;
        }
        console.log(newComent);
        comments.push(newComent);

        db.saveComments(comments);

        res.redirect("contacto");
      }     
};


module.exports = mainController