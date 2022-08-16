const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");

const productsController = require("../controllers/productsController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let carpetaDestino;
    if (req.body.category == "Tablas de surf") {
      carpetaDestino = path.join(__dirname, "/images/Tablas-de-surf/");
    } else {
      carpetaDestino = path.join(__dirname, "/images/Accesorios/");
    }

    cb(null, carpetaDestino);
  },
  filename: (req, file, cb) => {
    let nombreImagen =
      "producto" + Date.now() + path.extname(file.originalname);
    cb(null, nombreImagen);
  },
});

// /productos (GET)
router.get("/", productsController.index);

module.exports = router;
