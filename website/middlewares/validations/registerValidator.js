const { body } = require("express-validator");

const validationsRegister = [
    body("first_name").notEmpty().withMessage("Debes completar el nombre"),
    body("last_name").notEmpty().withMessage("Debes completar el apellido"),
    body("email")
      .notEmpty()
      .withMessage("Debes completar el email")
      .bail()
      .isEmail()
      .withMessage("El email debe ser con el formato 'juan@example.com'"),
    body("dni").notEmpty().withMessage("Debes completar el DNI"),
    body("birthdate")
      .notEmpty()
      .withMessage("Debes completar la fecha de nacimiento"),
    body("password")
      .notEmpty()
      .withMessage("Debes completar el password")
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe contener al menos 8 caracteres"),
];
  
module.exports = validationsRegister; 