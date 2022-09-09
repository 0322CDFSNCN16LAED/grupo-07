const db = require('../database/models');

const tablesController = {

    tables: (req, res) => {
        db.Tables.findAll({include: "tables_images"})
        .then((tablas)=>{
            res.render("tablas", {tablas: tablas})
        });
    },

    detail: function (req, res) {
        db.Tables.findByPk(req.params.id)
        
        .then((tabla)=>{
            db.Brands.findByPk(tabla.brand_id)

            .then((brand) => {
                db.ImagesTables.findAll({where: {table_id: req.params.id}})

                .then((images) => {
                    db.Tables.findAll({where: {brand_id: tabla.brand_id}, limit:4})

                    .then((relacionado)=>{
                        res.render("producto", {
                            product: tabla, 
                            category: "tablas", 
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
        let tabla = db.Tables.findByPk(req.params.id)
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
            db.ImagesTables.update({
                url_1: req.body.url_1,
                url_2: req.body.url_2,
                url_3: req.body.url_3,
                url_4: req.body.url_4
            })
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

        multifile = req.files;

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
           db.ImagesTables.create({
                url_1: req.body.url_1,
                url_2: req.body.url_2,
                url_3: req.body.url_3,
                url_4: req.body.url_4,
            })
        })

        .then(() => {
            return res.redirect("/tablas");
        })

        .catch((error) => res.send(error));
    },

};

module.exports = tablesController; 
