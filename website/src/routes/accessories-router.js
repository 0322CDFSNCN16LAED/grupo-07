const express = require("express");
const router = express.Router();
const multer = require("multer");

const path = require("path");

const accessoriesController = require("../controllers/accessoriesController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let carpetaDestino;
      carpetaDestino = path.join(__dirname, "../../public/images/accesorios/");
      cb(null, carpetaDestino);
    },
    filename: (req, file, cb) => {
      let nombreImagen = "accesorio" + Date.now() + path.extname(file.originalname);
      cb(null, nombreImagen);
    },
});
  
const upload = multer({ storage });



// /accesorios (GET)
router.get("/", accessoriesController.accessories);

// /accesorios/crear (GET)
router.get("/crear", accessoriesController.add);

// /accesorios (POST)
router.post("/crear", upload.array('url', 4), accessoriesController.create);

// /accesorios/:id/edit (GET)
router.get("/:id/edit/", accessoriesController.edit);

// /accesorios/:id/edit (PUT)
router.put("/:id/edit/", accessoriesController.update);

// /accesorios/:id (DELETE)
router.delete("/:id/destroy/",/* authMiddleware*/ accessoriesController.destroy);

// /accesorios/:id (GET)
router.get("/:id", accessoriesController.detail);

module.exports = router;
