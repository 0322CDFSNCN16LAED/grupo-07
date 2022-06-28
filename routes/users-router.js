const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const usersController = require('../controllers/usersController');

const { notStrictEqual } = require('assert');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        let carpetaDestino;
        carpetaDestino = path.join(__dirname,"../data/usersimages/");
        cb(null,carpetaDestino);
                                 },
    filename: (req, file, cb)=> {
        let nombreImagen = "usuario" + Date.now() + path.extname(file.originalname)
        cb(null, nombreImagen)
                                 }
});

const upload = multer({ storage });

///1. /users/login (GET)
router.get("/login", usersController.loginUser)
router.post("/login", usersController.checkUser)

///2. /users/register (GET)
router.get("/register", usersController.createUser); 
router.post("/register", upload.single('image'), usersController.storeUser); 

///3. /users/:id/edit (GET)
router.get("/:id/edit/", usersController.editUser);

////4. /users/:id (PUT)
router.put("/:id", upload.single("image"), usersController.updateUser);

///5. /products/:id (DELETE)
router.delete('/:id/destroy/', usersController.destroyUser);


router.get("/detail", usersController.detailUser)

module.exports = router;