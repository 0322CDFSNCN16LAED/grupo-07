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
  /*contacto: function (req, res) {
    const comments = db.getComments();
    res.render("contacto", { comments: comments });
  },
  storecoment: function (req, res) {
    const newComent = req.body;

    if (comments.length) {
      newComent.id = comments[comments.length - 1].id + 1;
    } else {
      newComent.id = 1;
    }
    comments.unshift(newComent);

    db.saveComments(comments);

    res.redirect("contacto");
  },*/
};

module.exports = mainController;