const db = require('../database/models');

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
    
    update: (req, res) => {
        
        db.Accessories.update({
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

        .then((updatedAccessory) => {
            let files =  req.files;   
            if (files){
                files.forEach((file) => {
                    let url = "/images/accesorios/"+file.filename;
                    db.AccessoriesImages.update({
                        url: url
                    }, {
                        where: {
                            accessory_id: updatedAccessory.id
                        }
                    })
                })
            }  
        })
        .then(() => {
            res.redirect("/accesorios/" + req.params.id);
        })
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

    create: (req, res) => {
        
        db.Accessories.create({
            type: req.body.type, 
            description: req.body.description,
            price: req.body.price,
            discount: req.body.description,
            brand_id: req.body.brand_id,
        })
        
        .then((newAccessory) => {
            let files =  req.files;

            if(files){  
                files.forEach((file) => {
                    let url = "/images/accesorios/"+file.filename;
                    db.AccessoriesImages.create({
                        url: url,
                        table_id: newAccessory.id
                    })
                })
            } else{
                db.AccessoriesImages.create({
                    url: "/images/accesorios/default.png",
                    table_id: newAccessory.id
                })
            }
        })
        
        .then(() => {
            return res.redirect("/accesorios");
        })

        .catch((error) => res.send(error));
    },
};

module.exports = accessoriesController; 