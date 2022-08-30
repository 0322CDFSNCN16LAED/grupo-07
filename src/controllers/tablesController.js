const db = require('../database/models');

const tablesController = {

    tables: (req, res) => {
        db.Tables.findAll()
        .then((tablas)=>{
            res.render("tablas", {tablas: tablas})
        });

    },

    detail: function (req, res) {
        let id = req.params.id;
        let relacionadas = db.Tables.findAll({limit: 4})
        
        db.Tables.findByPk(id)
        .then((tabla)=>{
            let brand_id = tabla.brand_id;
            db.Brands.findByPk(brand_id)
            .then((brand)=>{
                res.render("producto", { 
                    product: tabla, 
                    relatedProduct: relacionadas, 
                    category: "tablas", 
                    brand: brand
                })
            })      
            .catch((error) => console.log(error));
        })    
    },

    edit: (req, res) => {
        let id = req.params.id;
        
        let tabla = db.Tables.findByPk(id)
        let brands = db.Brands.findAll()
        
        Promise.all([tabla, brands])

        .then(([tabla, brands]) => {
        res.render("editar-tabla", {tabla, brands})
        })

        .catch((error) => console.log(error));
    },
    
    update: (req, res) => {
        db.Tables.update({
            type: req.body.type,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            table_length: req.body.table_length,
            table_expertise: req.body.table_expertise,
            table_volume: req.body.table_volume,
            table_thickness: req.body.table_thickness,
            table_material: req.body.table_material,
            table_keels: req.body.table_keels,
            brand_id: req.body.brand_id
        }, {
            where: {
                id: req.params.id
            }
        })
        
        .then(() => {
            res.redirect("/tablas/" + req.params.id);
        })
    },

    destroy: (req, res) => {
        let id = req.params.id;

        db.Tables.findByPk(id)
        
        .then((tabla) => {
            tabla.destroy()
                .then(() => {
                    res.redirect("/tablas");
                });
        });
    },

    add: (req, res) => {
        db.Brands.findAll()
        .then((brands)=>{
            res.render("crear-tabla", {brands})
        })
    },

    create: (req, res) => {

        db.Tables.create({
            type: req.body.type,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            table_length: req.body.table_length,
            table_expertise: req.body.table_expertise,
            table_volume: req.body.table_volume,
            table_thickness: req.body.table_thickness,
            table_material: req.body.table_material,
            table_keels: req.body.table_keels,
            brand_id: req.body.brand_id
        })

        .then(() => {
            return res.redirect("/tablas");
        })

        .catch((error) => res.send(error));
    },

};

module.exports = tablesController; 
