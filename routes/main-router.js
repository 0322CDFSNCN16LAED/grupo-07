const express = require("express");
const router = express.Router();

const productsRouter = require("./products-router");
const usersRouter = require("./users-router");

const mainController = require("../controllers/mainController");
const authMiddleware = require("../middlewares/authmiddleware");

router.get("/", mainController.home);

// router.get("/register", mainController.register);
// router.get("/login", mainController.login);
router.get("/nosotros", mainController.nosotros);
router.get("/escuelas", mainController.escuelas);
router.get("/carrito", authMiddleware, mainController.carrito);


router.get("/contacto", mainController.contacto);
router.post("/", mainController.storecoment);

router.use("/productos", productsRouter);

router.use("/users", usersRouter);

module.exports = router;
