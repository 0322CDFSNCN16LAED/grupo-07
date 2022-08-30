const express = require("express");
const router = express.Router();

const usersRouter = require("./users-router");
const tablesRouter = require("./tables-router");;
const accessoriesRouter = require("./accessories-router");;


const mainController = require("../controllers/mainController");
//const authMiddleware = require("../../middlewares/authMiddleware");

router.get("/", mainController.home);

// router.get("/register", mainController.register);
// router.get("/login", mainController.login);
router.get("/nosotros", mainController.nosotros);
router.get("/escuelas", mainController.escuelas);
router.get("/carrito", /*authMiddleware, */mainController.carrito);

router.use("/tablas", tablesRouter);
router.use("/accesorios", accessoriesRouter);
router.use("/users", usersRouter);


/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let carpetaDestino;
      if (req.body.category == "Tablas de surf") {
        carpetaDestino = path.join(__dirname, "/images/Tablas-de-surf/");
      } else {
        carpetaDestino = path.join(__dirname, "/images/Accesorios/");
      }
  
      cb(null, carpetaDestino);
    },
    filename: (req, file, cb) => {
      let nombreImagen =
        "producto" + Date.now() + path.extname(file.originalname);
      cb(null, nombreImagen);
    },
  });*/

module.exports = router;
