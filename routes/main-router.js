const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const productsRouter = require("./products-router");

router.get('/', mainController.home);

router.get("/register", mainController.register);
router.get("/login", mainController.login);
router.get("/nosotros", mainController.nosotros);
router.get("/escuelas-de-surf", mainController.escuelas);
router.get("/carrito", mainController.carrito);
router.get("/contacto", mainController.contacto);

router.use("/productos", productsRouter);

module.exports = router;

