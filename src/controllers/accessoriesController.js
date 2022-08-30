const db = require('../database/models');

const accessoriesController = {

    accessories: (req, res) => {
        db.Accessories.findAll()
        .then((accesorios)=>{
            res.render("accesorios", {accesorios: accesorios})
        });
    },

    detail: function (req, res) {
        let id = req.params.id;
        let relacionadas = db.Accessories.findAll({limit: 4})
        
        db.Accessories.findByPk(id)
        .then((accesorio)=>{
            let brand_id = accesorio.brand_id;
            db.Brands.findByPk(brand_id)
            .then((brand)=>{
                res.render("producto", { 
                    product: accesorio, 
                    relatedProduct: relacionadas, 
                    category: "accesorios", 
                    brand: brand
                })
            })        
            .catch((error) => console.log(error));
        })    
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