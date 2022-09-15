const express = require("express");
const router = express.Router();

const brandsController = require("../../controllers/api/brandsController");

// Api brands
router.get("/", brandsController.list);

module.exports = router;
