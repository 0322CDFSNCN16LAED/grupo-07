const express = require("express");
const router = express.Router();

const productsRouter = require("./products-router");
const usersRouter = require("./users-router");
const tablesRouter = require("./tables-router");;
const accessoriesRouter = require("./accessories-router");;


const mainController = require("../controllers/mainController");
const productsController = require("../controllers/productsController");
const authMiddleware = require("../../middlewares/authMiddleware");

router.get("/", mainController.home);

// router.get("/register", mainController.register);
// router.get("/login", mainController.login);
router.get("/nosotros", mainController.nosotros);
router.get("/escuelas", mainController.escuelas);
router.get("/carrito", authMiddleware, mainController.carrito);

//router.get("/contacto", mainController.contacto);
//router.post("/", mainController.storecoment);

router.get("/productos", productsRouter);

router.use("/tablas", tablesRouter);
router.use("/accesorios", accessoriesRouter);

router.use("/users", usersRouter);

module.exports = router;
