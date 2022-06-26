const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const productsRouter = require("./products-router");
const usersRouter = require("./users-router");

router.get('/', mainController.home);

// router.get("/register", mainController.register);
// router.get("/login", mainController.login);
router.get("/nosotros", mainController.nosotros);
router.get("/escuelas-de-surf", mainController.escuelas);
router.get("/carrito", mainController.carrito);

router.get("/contacto", mainController.contacto);
router.post("/", mainController.storecoment);

router.use("/productos", productsRouter);
router.use("/users", usersRouter);

module.exports = router;

