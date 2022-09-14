const express = require("express");
const router = express.Router();

const productsController = require("../../controllers/api/productsController");

// Api products
router.get("/", productsController.list);

router.get("/tabla/:id", productsController.detailTable);

router.get("/accesorio/:id", productsController.detailAccessorie);

module.exports = router;
