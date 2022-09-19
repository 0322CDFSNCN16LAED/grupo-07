const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const accessoryCreateMiddleware = require ("../../middlewares/validations/products/accessoryCreateMiddeleware")
const accessoryEditMiddleware = require ("../../middlewares/validations/products/accessoryEditMiddeleware")
const storage = require ("../../middlewares/MulterMiddleware/storageAccessory")
const upload = multer({ storage });

const accessoriesController = require("../controllers/accessoriesController");

// /accesorios (GET)
router.get("/", accessoriesController.accessories);

// /accesorios/crear (GET)
router.get("/crear", accessoriesController.add);

// /accesorios (POST)
router.post("/crear", upload.array('url', 4),accessoryCreateMiddleware, accessoriesController.create);

// /accesorios/:id/edit (GET)
router.get("/:id/edit/", accessoriesController.edit);

// /accesorios/:id/edit (PUT)
router.put("/:id/edit/", upload.array('url', 4), accessoryEditMiddleware, accessoriesController.update);

// /accesorios/:id (DELETE)
router.delete("/:id/destroy/",/* authMiddleware*/ accessoriesController.destroy);

// /accesorios/:id (GET)
router.get("/:id", accessoriesController.detail);

module.exports = router;
