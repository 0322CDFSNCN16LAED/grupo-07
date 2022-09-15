const db = require('../database/models');

const mainController = {
  home: function (req, res) {
    
    let tables = db.Tables.findAll({include: "tables_images"})
    let accessories = db.Accessories.findAll({include: "accessories_images"})

    Promise.all([tables, accessories])
      
    .then(([tables, accessories]) => {
      return res.render("home", {
        tables, accessories, user: req.session.userLogged
      });
    })
    
    .catch((error) => res.send(error));
  },

  nosotros: function (req, res) {
    res.render("nosotros", {user: req.session.userLogged});
  },
  
  escuelas: function (req, res) {
    res.render("escuelas", {user: req.session.userLogged});
  },
  
  carrito: function (req, res) {
    res.render("carrito", {user: req.session.userLogged});
  },
  pregunta: function (req, res) {                  // ver uso de este controlador
    db.Comments.findAll({limit: 4})
    .then((comments)=>{
      res.render("contacto", { comments: comments, user: req.session.userLogged });
    })
  },
  crearPregunta: (req,res) => {
    db.Questions.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      question: req.body.question,
      user: req.session.userLogged
    })
    .then(() => {
      return res.redirect("/contacto");
    })
    .catch((error) => res.send(error));
  },
  comentario: function (req, res) {
    db.Comments.findAll({limit: 4})
    .then((comments)=>{
      res.render("contacto", { comments: comments, user: req.session.userLogged });
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