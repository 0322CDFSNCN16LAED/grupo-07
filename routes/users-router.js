const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const usersController = require("../controllers/usersController");
const {check} = require('express-validator');

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

// Register 
router.get("/register", usersController.createUser); 
router.post("/register", upload.single('image'), usersController.storeUser); 

// Login 
router.get("/login", usersController.loginUser)

router.get("/login", function (req, res){
    if (req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }

    req.session.numeroVisitas++;
})

router.post("/login", [
    check("email").notEmpty(),
    check("password").notEmpty(),
    check("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres.")
], usersController.loginProcess);


// /users/:id/edit (GET)
router.get("/:id/edit/", usersController.editUser);

// /users/:id (PUT)
router.put("/:id", upload.single("image"), usersController.updateUser);


// Profile
router.get("/profile", usersController.detailUser);

router.get("/logout", usersController.logout);

module.exports = router;