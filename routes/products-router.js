const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        let carpetaDestino = path.join(__dirname,"../public/images/accesorios/")
        cb(null,carpetaDestino);
    },
    filename: (req, file, cb)=> {
        let nombreImagen = "producto" + Date.now() + path.extname(file.originalname)
        cb(null, nombreImagen)
    }
});

const upload = multer({ storage });

///1. /products (GET)
router.get("/", productsController.index)

///2. /products/create (GET)
router.get("/create", productsController.create); 

///3. /products/:id (GET)
router.get("/:id", productsController.detail);

///4. /products (POST)
router.post("/", upload.single('image'), productsController.store); 

///5. /products/:id/edit (GET)
router.get("/:id/edit/", productsController.edit);

////6. /products/:id (PUT)
router.put("/:id", upload.single("image"), productsController.update);

///7. /products/:id (DELETE)
router.delete('/:id', productsController.destroy);

module.exports = router;