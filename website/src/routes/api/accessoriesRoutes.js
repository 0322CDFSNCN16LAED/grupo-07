const express = require("express");
const router = express.Router();

const accessoriesController = require("../../controllers/api/accessoriesController");

// Api tables
router.get("/", accessoriesController.list);

router.get("/:id", accessoriesController.detailAccessorie);

module.exports = router;
