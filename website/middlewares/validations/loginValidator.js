const { body } = require("express-validator");

const validationsLogin = [
    body("email")
      .notEmpty()
      .bail()
      .isEmail()
      .withMessage("El email debe ser con el formato 'juan@example.com'"),
    body("password")
      .notEmpty()
      .withMessage("Debes completar el password")
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe contener al menos 8 caracteres"),
];

module.exports = validationsLogin; 