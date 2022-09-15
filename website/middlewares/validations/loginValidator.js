const { body } = require("express-validator");

const loginValidatior = [
    body("email")
      .notEmpty()
      .withMessage('Tenés que ingresar un correo electrónico')
      .isEmail()
      .withMessage("El email debe ser con el formato 'juan@example.com'"),

    body("password")
      .notEmpty()
      .withMessage("Debes completar la contraseña")
      .isLength({ min: 8 })
      .withMessage('La contraseña debe tener por lo menos 8 caracteres'),
];

module.exports = loginValidatior; 