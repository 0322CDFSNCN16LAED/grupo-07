const express = require("express");
const router = express.Router();

const tablesController = require("../../controllers/api/tablesController");

// Api tables
router.get("/", tablesController.list);

router.get("/:id", tablesController.detailTable);

module.exports = router;
