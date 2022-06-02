const mainController = {
  home: function (req, res) {
    res.render("home");
  },
  productos: function (req, res) {
    res.render("productos")
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
};


module.exports = mainController

/// router.get('/', mainController.home);
///router.get("/productos", mainController.productos);
///router.get("/register", mainController.register);
///router.get("/login", mainController.login);
///router.get("/nosotros", mainController.nosotros);
///router.get("/escuelas-de-surf", mainController.escuelas);
///router.get("/carrito", mainController.carrito);