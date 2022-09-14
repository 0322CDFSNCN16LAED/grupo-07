const express = require("express");
const router = express.Router();
const usersRoutes = require("./usersRoutes");
const productsRoutes = require("./productsRoutes");

//apis/users
router.use("/users", usersRoutes);

router.use("/products", productsRoutes);

module.exports = router;
