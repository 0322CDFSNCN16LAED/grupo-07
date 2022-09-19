const { body } = require("express-validator");

const tableCreateMiddleware = [
  body("type")
    .notEmpty()
    .withMessage("Debes completar el tipo de tabla"),
    
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
  
  body("table_length")
      .notEmpty()
      .withMessage("Debes completar el largo(cm) de la tabla en numeros"),
  
  body("table_thickness")
      .notEmpty()
      .withMessage("Debes completar el espesor(cm) de la tabla en numeros"),

  body("table_volume")
      .notEmpty()
      .withMessage("Debes completar el volumen (cm3)de la tabla en numeros"),

  body("table_material")
      .notEmpty()
      .withMessage("Debes completar el material de construccion de la tabla"),

  body("table_keels")
      .notEmpty()
      .withMessage("Debes completar la cantidad de keels en numeros"),

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


  
module.exports = tableCreateMiddleware; 