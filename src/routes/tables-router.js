const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");

const tablesController = require("../controllers/tablesController");

// /tablas (GET)
router.get("/", tablesController.tables);

// /tablas/crear (GET)
router.get("/crear", tablesController.add);

// /tablas (POST)
router.post("/crear", /*upload.single("image")*/ tablesController.create);

// /tablas/:id/edit (GET)
router.get("/:id/edit/", tablesController.edit);

// /tablas/:id/edit (PUT)
router.put("/:id/edit/", tablesController.update);

// /tablas/:id (DELETE)
router.delete("/:id/destroy/",/* authMiddleware*/ tablesController.destroy);

// /tablas/:id (GET)
router.get("/:id", tablesController.detail);

module.exports = router;
