const { body } = require("express-validator");

const editUserValidator = [
  body("first_name")
    .notEmpty()
    .withMessage("Debes completar el nombre"),
    
  body("last_name")
    .notEmpty()
    .withMessage("Debes completar el apellido"),
  
  body("email")
    .notEmpty()
    .withMessage("Debes completar el email")
    .bail()
    .isEmail()
    .withMessage("El email debe ser con el formato 'juan@example.com'"),
  
  body("dni")
    .notEmpty()
    .withMessage("Debes completar el DNI"),
  
  body("birthdate")
      .notEmpty()
      .withMessage("Debes completar la fecha de nacimiento"),

  body("address")
      .notEmpty()
      .withMessage("Debes completar la direccion"),
  
  body("profile_image")
      .custom((value, { req }) => {
        if(req.file){
              const fileAccepted =["image/jpg","image/jpeg","image/png","image/bpm",];
              if(!fileAccepted.includes(req.file.mimetype))
                  { 
                     throw new Error('Las extensiones de archivo permitidas son: .jpg ,.jpeg ,.bmp ,.png');
                  }}
                  return true })
      .custom((value,{req})=>{
        if(req.file){
              const maxFileSize= 2000000   
                if(req.file.size > maxFileSize)
                  { throw new Error('El tamano de los archivos debe ser menor a 2 MB');
                 } }
                 return true })
];
  
module.exports = editUserValidator; 