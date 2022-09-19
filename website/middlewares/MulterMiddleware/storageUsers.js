const multer = require("multer");
const path = require("path");

const storageUsers = multer.diskStorage({
    destination: (req, file, cb) => {
      let carpetaDestino;
      carpetaDestino = path.join(__dirname, "../../public/images/users-images/");
      cb(null, carpetaDestino);
    },
    filename: (req, file, cb) => {
      let nombreImagen = "usuario" + Date.now() + path.extname(file.originalname);
      cb(null, nombreImagen);
    },
  });

  module.exports = storageUsers;