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
    carpetaDestino = path.join(__dirname, "/../../data/users-images/");
    cb(null, carpetaDestino);
  },
  filename: (req, file, cb) => {
    let nombreImagen = "usuario" + Date.now() + path.extname(file.originalname);
    cb(null, nombreImagen);
  },
});

const upload = multer({ storage });

// Register
router.get("/register", guestMiddleware, usersController.createUser);
router.post(
  "/register",
  upload.single("profile_image"),
  usersController.storeUser
);

// Login

router.get("/login", guestMiddleware, usersController.loginUser);

router.post("/login", usersController.loginProcess);

// users/profile
router.get("/profile", usersController.detailUser);
// users/logout
router.get("/:id/logout", usersController.logoutUser);

// /users/:id/edit (GET)
router.get("/:id/edit/", usersController.editUser);

// Profile
router.get("/profile", authMiddleware, usersController.detailUser);
// /users/:id (PUT)
router.put("/:id", usersController.updateUser);

module.exports = router;
