const express = require("express");
const router = express.Router();
const usersRoutes = require("./userRoutes");
const tablesRoutes = require("./tablesRoutes");
const accessoriesRoutes = require("./accessoriesRoutes");
const brandsRoute = require("./brandsRoutes");

//apis/users
router.use("/usuarios", usersRoutes);

router.use("/tablas", tablesRoutes);

router.use("/accesorios", accessoriesRoutes);

router.use("/marcas", brandsRoute);

module.exports = router;
