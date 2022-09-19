
const multer = require("multer");
const path = require("path");


const storageAccessory = multer.diskStorage({
    destination: (req, file, cb) => {
      let carpetaDestino;
      carpetaDestino = path.join(__dirname, "../../public/images/accesorios/");
      cb(null, carpetaDestino);
    },
    filename: (req, file, cb) => {
      let nombreImagen = "accesorio" + Date.now() + path.extname(file.originalname);
      cb(null, nombreImagen);
    },
});

module.exports = storageAccessory; 