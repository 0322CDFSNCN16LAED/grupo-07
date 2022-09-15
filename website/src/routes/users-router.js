const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const { body } = require("express-validator");

const guestMiddleware = require("../../middlewares/guestMiddleware");
const authMiddleware = require("../../middlewares/authmiddleware");
const loginValidator = require("../../middlewares/validations/loginValidator");
const registerValidator = require("../../middlewares/validations/registerValidator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let carpetaDestino;
    carpetaDestino = path.join(__dirname, "../../public/images/users-images/");
    cb(null, carpetaDestino);
  },
  filename: (req, file, cb) => {
    let nombreImagen = "usuario" + Date.now() + path.extname(file.originalname);
    cb(null, nombreImagen);
  },
});

const upload = multer({ storage });

// usuarios/registro (GET)
router.get("/registro", guestMiddleware, usersController.createUser);

// usuarios/registro (POST)
router.post("/registro", upload.single("profile_image"), registerValidator, usersController.storeUser);

// usuarios/login (GET)
router.get("/login", guestMiddleware, usersController.loginUser);

// usuarios/login (POST)
router.post("/login", loginValidator, usersController.loginProcess);

// usuarios/logout (GET)
router.get("/:id/logout", usersController.logoutUser);

// usuarios/:id/editar (GET)
router.get("/:id/editar/", usersController.editUser);

// usuarios/perfil (GET)
router.get("/perfil", authMiddleware, usersController.detailUser);

// usuarios/:id (PUT)
router.put("/:id",upload.single("profile_image"), usersController.updateUser);

module.exports = router;