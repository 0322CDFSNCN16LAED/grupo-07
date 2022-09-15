const express = require("express");
const router = express.Router();

const usersRouter = require("./users-router");
const tablesRouter = require("./tables-router");;
const accessoriesRouter = require("./accessories-router");
const mainController = require("../controllers/mainController");

// /
router.get("/", mainController.home);

// /nosotros
router.get("/nosotros", mainController.nosotros);

// /escuelas
router.get("/escuelas", mainController.escuelas);

// /carrito
router.get("/carrito", mainController.carrito);

// /contacto (GET)
router.get("/contacto", mainController.comentario);

// /contacto (POST)
router.post("/contacto", mainController.crearComentario);

// /contacto/pregunta (GET)
router.get("/contacto/pregunta", mainController.pregunta);    //ruta por get no usada

// /contacto/pregunta (POST)
router.post("/contacto/pregunta", mainController.crearPregunta);

// /tablas
router.use("/tablas", tablesRouter);

// /accesorios
router.use("/accesorios", accessoriesRouter);

// /usuarios
router.use("/usuarios", usersRouter);

module.exports = router;