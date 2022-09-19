
const multer = require("multer");
const path = require("path");


const storageTables = multer.diskStorage({
    destination: (req, file, cb) => {
      let carpetaDestino;
      carpetaDestino = path.join(__dirname, "../../public/images/tablas/");
      cb(null, carpetaDestino);
    },
    filename: (req, file, cb) => {
      let nombreImagen = "tabla" + Date.now() + path.extname(file.originalname);
      cb(null, nombreImagen);
    },
});

module.exports = storageTables;