const db = require('../database/models');

const mainController = {
  home: function (req, res) {
    let tablas = db.Tables.findAll({limit: 4})
    let accesorios = db.Accessories.findAll({limit: 4})
  
    Promise.all([tablas, accesorios])
      
    .then(([tablas, accesorios]) => {
      return res.render("home", {
        tablas, accesorios
      });
    })
    
    .catch((error) => res.send(error));
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
  pregunta: function (req, res) {
    db.Comments.findAll({limit: 4})
    .then((comments)=>{
      res.render("contacto", { comments: comments });
    })
  },
  crearPregunta: (req,res) => {
    db.Questions.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      question: req.body.question,
    })
    .then(() => {
      return res.redirect("/contacto");
    })
    .catch((error) => res.send(error));
  },
  comentario: function (req, res) {
    db.Comments.findAll({limit: 4})
    .then((comments)=>{
      res.render("contacto", { comments: comments });
    })
  },
  crearComentario: (req, res) => {
    db.Comments.create({
        comment: req.body.comment,
    })
    .then(() => {
        return res.redirect("/contacto");
    })
    .catch((error) => res.send(error));
}
};

module.exports = mainController;