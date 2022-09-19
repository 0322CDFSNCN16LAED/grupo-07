const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const tablesController = require("../controllers/tablesController");

const tableCreateMiddleware = require ("../../middlewares/validations/products/tableCreateMiddleware")
const tableEditMidddleware = require ("../../middlewares/validations/products/tableEditMidddleware")
const storage = require("../../middlewares/MulterMiddleware/storageTables")
  
const upload = multer({ storage });

// /tablas (GET)
router.get("/", tablesController.tables);

// /tablas/crear (GET)
router.get("/crear", tablesController.add);

// /tablas (POST)
router.post("/crear", upload.array('url', 4),tableCreateMiddleware, tablesController.create);

// /tablas/:id/edit (GET)
router.get("/:id/edit/", tablesController.edit);

// /tablas/:id/edit (PUT)
router.put("/:id/edit/",  upload.array('url', 4), tableEditMidddleware , tablesController.update);

// /tablas/:id (DELETE)
router.delete("/:id/destroy/", tablesController.destroy);

// /tablas/:id (GET)
router.get("/:id", tablesController.detail);

module.exports = router;
