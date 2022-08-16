const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const { destroy, update, store } = require("../controllers/productsController");

const accessoriesController = require("../controllers/accessoriesController");

// /accesorios (GET)
router.get("/", accessoriesController.accessories);

// /accesorios/create (GET)
router.get("/create-tables", accessoriesController.create);

// /accesorios (POST)
//router.post("/", tablesController.store);

// /accesorios/:id/edit (GET)
router.get("/:id/edit/", authMiddleware, accessoriesController.edit);

// /accesorios/:id (PUT)
//router.put("/:id/edit/", upload.single("image"), tablesController.update);

// /accesorios/:id (DELETE)
router.delete("/:id/destroy/", authMiddleware, accessoriesController.destroy);

// /accesorios/:id (GET)
router.get("/:id", accessoriesController.detail);

module.exports = router;
