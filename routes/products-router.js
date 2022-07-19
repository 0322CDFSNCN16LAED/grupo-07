const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");

const productsController = require("../controllers/productsController");
const { notStrictEqual } = require("assert");
const authMiddleware = require("../middlewares/authmiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let carpetaDestino;
    if (req.body.category == "Tablas de surf") {
      carpetaDestino = path.join(__dirname, "../public/images/Tablas-de-surf/");
    } else {
      carpetaDestino = path.join(__dirname, "../public/images/Accesorios/");
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

<<<<<<< HEAD
// 1. /productos (GET)
router.get("/", productsController.index);

// 2. /productos/create (GET)
router.get("/create-accesories", productsController.createAccesories);
router.get("/create-tables", authMiddleware, productsController.createTables);
=======
// /productos (GET)
router.get("/", productsController.index)

// /productos/tablas (GET)
router.get("/tablas", productsController.tablas);

// /productos/accesorios (GET)
router.get("/accesorios", productsController.accesorios);


// /productos/create (GET)
router.get("/create-accesories", productsController.createAccesories); 
router.get("/create-tables", productsController.createTables); 
>>>>>>> 1daf4aabad4b78fa96885d32978eab1e10c87ce4

// /productos/:id (GET)
router.get("/:id", productsController.detail);

<<<<<<< HEAD
// 4. /productos (POST)
router.post("/", upload.single("image"), productsController.store);

// 5. /productos/:id/edit (GET)
router.get("/:id/edit/", authMiddleware, productsController.edit);
=======
// /productos (POST)
router.post("/", upload.single('image'), productsController.store); 

// /productos/:id/edit (GET)
router.get("/:id/edit/", productsController.edit);
>>>>>>> 1daf4aabad4b78fa96885d32978eab1e10c87ce4

// /productos/:id (PUT)
router.put("/:id/edit/", upload.single("image"), productsController.update);

<<<<<<< HEAD
// 7. /productos/:id (DELETE)
router.delete("/:id/destroy/", authMiddleware, productsController.destroy);
=======
// /productos/:id (DELETE)
router.delete('/:id/destroy/', productsController.destroy);
>>>>>>> 1daf4aabad4b78fa96885d32978eab1e10c87ce4

module.exports = router;
