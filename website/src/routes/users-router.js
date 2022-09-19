const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const { body } = require("express-validator");

const guestMiddleware = require("../../middlewares/guestMiddleware");
const authMiddleware = require("../../middlewares/authmiddleware");
const loginUserValidator = require("../../middlewares/validations/users/loginUserValidator");
const registerUserValidator = require("../../middlewares/validations/users/registerUserValidator");
const editUserValidator = require ("../../middlewares/validations/users/editUserValidator")
const storage = require("../../middlewares/MulterMiddleware/storageUsers")


const upload = multer({ storage });

// usuarios/registro (GET)
router.get("/registro", guestMiddleware, usersController.createUser);

// usuarios/registro (POST)
router.post("/registro", upload.single("profile_image"), registerUserValidator, usersController.storeUser);

// usuarios/login (GET)
router.get("/login", guestMiddleware, usersController.loginUser);

// usuarios/login (POST)
router.post("/login", loginUserValidator, usersController.loginProcess);

// usuarios/logout (GET)
router.get("/:id/logout", usersController.logoutUser);

// usuarios/:id/editar (GET)
router.get("/:id/editar/", usersController.editUser);

// usuarios/perfil (GET)
router.get("/perfil", authMiddleware, usersController.detailUser);

// usuarios/:id (PUT)
router.put("/:id",upload.single("profile_image"),editUserValidator, usersController.updateUser);

module.exports = router;