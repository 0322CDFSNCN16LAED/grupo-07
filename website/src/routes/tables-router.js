const express = require("express");
const router = express.Router();
const multer = require("multer");

const path = require("path");

const tablesController = require("../controllers/tablesController");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let carpetaDestino;
      carpetaDestino = path.join(__dirname, "../../public/images/tablas/");
      cb(null, carpetaDestino);
    },
    filename: (req, file, cb) => {
      let nombreImagen = "tabla" + Date.now() + path.extname(file.originalname);
      cb(null, nombreImagen);
    },
});
  
const upload = multer({ storage });

// /tablas (GET)
router.get("/", tablesController.tables);

// /tablas/crear (GET)
router.get("/crear", tablesController.add);

// /tablas (POST)
router.post("/crear", upload.array('url', 4), tablesController.create);

// /tablas/:id/edit (GET)
router.get("/:id/edit/", tablesController.edit);

// /tablas/:id/edit (PUT)
router.put("/:id/edit/",  upload.array('url', 4), tablesController.update);

// /tablas/:id (DELETE)
router.delete("/:id/destroy/", tablesController.destroy);

// /tablas/:id (GET)
router.get("/:id", tablesController.detail);

module.exports = router;