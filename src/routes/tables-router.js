const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const { destroy, update, store } = require("../controllers/productsController");

const tablesController = require("../controllers/tablesController");

// /tablas (GET)
router.get("/", tablesController.tables);

// /tablas/create (GET)
router.get("/create-tables", tablesController.create);

// /tablas (POST)
//router.post("/", /*upload.single("image")*/ tablesController.store);

// /tablas/:id/edit (GET)
router.get("/:id/edit/", tablesController.edit);

// /tablas/:id/edit (PUT)
router.put("/:id/edit/", tablesController.update);

// /tablas/:id (DELETE)
router.delete("/:id/destroy/", authMiddleware, tablesController.destroy);

// /tablas/:id (GET)
router.get("/:id", tablesController.detail);

module.exports = router;
