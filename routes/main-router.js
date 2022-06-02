const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController")

router.get('/', mainController.home);
router.get("/productos", mainController.productos);
router.get("/register", mainController.register);
router.get("/login", mainController.login);
router.get("/nosotros", mainController.nosotros);
router.get("/escuelas-de-surf", mainController.escuelas);
router.get("/carrito", mainController.carrito);

module.exports = router;