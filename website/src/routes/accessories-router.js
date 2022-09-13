const express = require("express");
const router = express.Router();
//const authMiddleware = require("../../middlewares/authMiddleware");

const accessoriesController = require("../controllers/accessoriesController");


// /accesorios (GET)
router.get("/", accessoriesController.accessories);

// /accesorios/crear (GET)
router.get("/crear", accessoriesController.add);

// /accesorios (POST)
router.post("/crear", /*upload.single("image")*/ accessoriesController.create);

// /accesorios/:id/edit (GET)
router.get("/:id/edit/", accessoriesController.edit);

// /accesorios/:id/edit (PUT)
router.put("/:id/edit/", accessoriesController.update);

// /accesorios/:id (DELETE)
router.delete("/:id/destroy/",/* authMiddleware*/ accessoriesController.destroy);

// /accesorios/:id (GET)
router.get("/:id", accessoriesController.detail);

module.exports = router;
