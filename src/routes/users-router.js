const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const { check } = require("express-validator");
const { body } = require("express-validator");

const guestMiddleware = require("../../middlewares/guestMiddleware");
const authMiddleware = require("../../middlewares/authmiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let carpetaDestino;
    carpetaDestino = path.join(__dirname, "../../data/usersimages/");
    cb(null, carpetaDestino);
  },
  filename: (req, file, cb) => {
    let nombreImagen = "usuario" + Date.now() + path.extname(file.originalname);
    cb(null, nombreImagen);
  },
});

const upload = multer({ storage });

const validationsRegister = [
  body("firstName").notEmpty().withMessage("Debes completar el nombre"),
  body("lastName").notEmpty().withMessage("Debes completar el apellido"),
  body("email")
    .notEmpty()
    .withMessage("Debes completar el email")
    .bail()
    .isEmail()
    .withMessage("El email debe ser con el formato 'juan@example.com'"),
  body("dni").notEmpty().withMessage("Debes completar el DNI"),
  body("address").notEmpty().withMessage("Debes completar el domicilio"),
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

// Register
router.get("/register", guestMiddleware, usersController.createUser);
router.post(
  "/register",
  upload.single("image"),
  validationsRegister,
  usersController.storeUser
);

// Login

router.get("/login", guestMiddleware, usersController.loginUser);

router.post("/login", usersController.loginProcess);

// users/profile
router.get("/profile", usersController.detailUser);
// users/logout
//router.get("/logout", usersController.logout);

// /users/:id/edit (GET)
router.get("/:id/edit/", usersController.editUser);

// /users/:id (PUT)
router.put("/:id", usersController.updateUser);

// Profile
router.get("/profile", authMiddleware, usersController.detailUser);

module.exports = router;