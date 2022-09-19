const { body } = require("express-validator");

const accessoryCreateMiddleware = [
  body("type")
    .notEmpty()
    .withMessage("Debes completar el tipo de accesorio"),
    
  body("description")
    .notEmpty()
    .isLength({ min: 20 })
    .withMessage("Debes completar la descripcion con al menos 20 caracteres"),
  
  body("price")
    .notEmpty()
    .withMessage("Debes completar el precio con numeros"),
  
  body("discount")
    .notEmpty()
    .withMessage("Debes completar el descuento con numeros"),
  
  body("url")
      .custom((value, { req }) => {
              const fileAccepted =["image/jpg","image/jpeg","image/png","image/bpm",];
              req.files.forEach(file => {
                  if(!fileAccepted.includes(file.mimetype))
                  { console.log(file.mimetype)
                     throw new Error('Las extensiones de archivo permitidas son: .jpg ,.jpeg ,.bmp ,.png');
                  }})
                  return true })
      .custom((value,{req})=>{
              const maxFileSize= 2000000   
              req.files.forEach(file => {
                console.log(file.size)
                if(file.size > maxFileSize)
                  { throw new Error('El tamano de los archivos debe ser menor a 2 MB');}
                   })
                 return true })
    
  ]


  
module.exports = accessoryCreateMiddleware; 