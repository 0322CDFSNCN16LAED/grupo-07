const db = require('../database/models');

const accessoriesController = {

    accessories: (req, res) => {
        db.Accessories.findAll({include: "accessories_images"})
        .then((accesorios)=>{
            res.render("accesorios", {accesorios: accesorios})
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
                            relacionado
                        })
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
        res.render("editar-accesorio", {accesorio, brands})
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
        
        .then(() => {
            res.redirect("/accesorios/" + req.params.id);
        })
    },

    destroy: (req, res) => {
        let id = req.params.id;

        db.Accessories.findByPk(id)
        
        .then((accesorio) => {
            accesorio.destroy()
                .then(() => {
                    res.redirect("/accesorios");
                });
        });
    },

    add: (req, res) => {
        db.Brands.findAll()
        .then((brands)=>{
            res.render("crear-accesorio", {brands})
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
        
        .then(function () {
            res.redirect("/accesorios");
        });
    }

};

module.exports = accessoriesController; 