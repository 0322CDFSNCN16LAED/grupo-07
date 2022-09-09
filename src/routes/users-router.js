const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const { body } = require("express-validator");

const guestMiddleware = require("../../middlewares/guestMiddleware");
const authMiddleware = require("../../middlewares/authmiddleware");


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

const validationsRegister = [
  body("first_name").notEmpty().withMessage("Debes completar el nombre"),
  body("last_name").notEmpty().withMessage("Debes completar el apellido"),
  body("email")
    .notEmpty()
    .withMessage("Debes completar el email")
    .bail()
    .isEmail()
    .withMessage("El email debe ser con el formato 'juan@example.com'"),
  body("dni").notEmpty().withMessage("Debes completar el DNI"),
  body("birthdate")
    .notEmpty()
    .withMessage("Debes completar la fecha de nacimiento"),
  body("password")
    .notEmpty()
    .withMessage("Debes completar el password")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe contener al menos 8 caracteres"),
];

// usuarios/registro (GET)
router.get("/registro", guestMiddleware, usersController.createUser);

// usuarios/registro (POST)
router.post("/registro", upload.single("profile_image"), validationsRegister, usersController.storeUser);

// usuarios/login (GET)
router.get("/login", guestMiddleware, usersController.loginUser);

// usuarios/login (POST)
router.post("/login", usersController.loginProcess);

// usuarios/logout (GET)
router.get("/:id/logout", usersController.logoutUser);

// usuarios/:id/editar (GET)
router.get("/:id/editar/", usersController.editUser);

// usuarios/perfil (GET)
router.get("/perfil", authMiddleware, usersController.detailUser);

// usuarios/:id (PUT)
router.put("/:id",upload.single("profile_image"), usersController.updateUser);

module.exports = router;