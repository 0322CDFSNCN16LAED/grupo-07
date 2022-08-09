const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");

const productsController = require("../controllers/productsController");
const { notStrictEqual } = require("assert");
const authMiddleware = require("../../middlewares/authMiddleware");

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

const upload = multer({ storage });

// /productos (GET)
router.get("/", productsController.index);

// /productos/tablas (GET)
router.get("/tablas", productsController.tablas);

// /productos/accesorios (GET)
router.get("/accesorios", productsController.accesorios);

// /productos/create (GET)
router.get("/create-accesories", productsController.createAccesories);
router.get("/create-tables", productsController.createTables);

// /productos/:id (GET)
router.get("/:id", productsController.detail);

// 4. /productos (POST)
router.post("/", upload.single("image"), productsController.store);

// 5. /productos/:id/edit (GET)
router.get("/:id/edit/", authMiddleware, productsController.edit);

// /productos/:id (PUT)
router.put("/:id/edit/", upload.single("image"), productsController.update);

// 7. /productos/:id (DELETE)
router.delete("/:id/destroy/", authMiddleware, productsController.destroy);

module.exports = router;
