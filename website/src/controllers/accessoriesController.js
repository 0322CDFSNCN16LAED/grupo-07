const db = require('../database/models');
const { validationResult } = require("express-validator");

const accessoriesController = {

    accessories: (req, res) => {
        db.Accessories.findAll({include: "accessories_images"})
        .then((accesorios)=>{
            res.render("accesorios", {accesorios: accesorios, user: req.session.userLogged})
        });
    },

    detail: function (req, res) {
        db.Accessories.findByPk(req.params.id)
        
        .then((accesorio)=>{
            db.Brands.findByPk(accesorio.brand_id)

            .then((brand) => {
                db.AccessoriesImages.findAll({where: {accessory_id: req.params.id}})

                .then((images) => {
                    db.Accessories.findAll({where: {brand_id: accesorio.brand_id}, limit:4, include: "accessories_images"})

                    .then((relacionado)=>{
                        res.render("producto", {
                          product: accesorio,
                          category: "accesorios",
                          brand,
                          images,
                          relacionado,
                          user: req.session.userLogged,
                        });
                    })  
                })      
            })       
        })
        .catch((error) => console.log(error))
    },

    edit: (req, res) => {
        let id = req.params.id;
        
        let accesorio = db.Accessories.findByPk(id)
        let brands = db.Brands.findAll()
        
        Promise.all([accesorio, brands])

        .then(([accesorio, brands]) => {
        res.render("editar-accesorio", {accesorio, brands, user: req.session.userLogged})
        })

        .catch((error) => console.log(error));
    },
    
    update: async (req, res) => {
        const accesorio = req.body;
        accesorio.id=req.params.id;

        const errors = validationResult(req);
        if (errors.isEmpty()) {
               const accessoryUpdated= await  db.Accessories.update({
                                type: req.body.type,
                                description: req.body.description,
                                price: req.body.price,
                                discount: req.body.discount,
                                brand_id: req.body.brand_id
                            }, {
                                where: {
                                    id: req.params.id
                                }
                            })          
             
            if (req.files.length!=0){
                    db.AccessoriesImages.destroy({where: {accessory_id: req.params.id}})
                    req.files.forEach((file) => {
                        let url = "/images/accesorios/"+ file.filename;
                        db.AccessoriesImages.create({
                            url: url,
                            accessory_id: req.params.id
                                     })
                            })
                        }           
        
            res.redirect("/accesorios/" + req.params.id);
        } else{ 
            const brands = await db.Brands.findAll()
        
            res.render("editar-accesorio", { errors: errors.array(), accesorio: accesorio, brands: brands, user: req.session.userLogged }) }
    },
    

    destroy: (req, res) => {
        db.AccessoriesImages.destroy({where: {accessory_id: req.params.id}})
        .then(() => {
            db.Accessories.destroy({where: { id: req.params.id}})
            .then(() => {
                res.redirect("/accesorios");
            });
        });
    },

    add: (req, res) => {
        db.Brands.findAll()
        .then((brands)=>{
            res.render("crear-accesorio", {brands, user: req.session.userLogged})
        })
    },

    create: async (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
        
            const newAccessory= await db.Accessories.create({
                        type: req.body.type, 
                        description: req.body.description,
                        price: req.body.price,
                        discount: req.body.description,
                        brand_id: req.body.brand_id,
                    })

                    if(req.files.lenght!=0){  
                        req.files.forEach((file) => {
                            let url = "/images/accesorios/"+file.filename;
                            db.AccessoriesImages.create({
                                url: url,
                                accessory_id: newAccessory.id
                            })
                        })
                    } else{
                        db.AccessoriesImages.create({
                            url: "/images/accesorios/default.png",
                            accessory_id: newAccessory.id
                        })
                    }

                res.redirect("/accesorios");

                }else{
                    const brands = await db.Brands.findAll()
                    res.render("crear-accesorio", { errors: errors.array(), old: req.body, brands: brands, user: req.session.userLogged }) 
                    }
                },

            
      
    
};

module.exports = accessoriesController; 