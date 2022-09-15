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
                db.TablesImages.findAll({where: {table_id: req.params.id}})

                .then((images) => {
                    db.Tables.findAll({where: {brand_id: tabla.brand_id}, limit:4, include: "tables_images"})

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
        .then((updatedTable) => {
            let files =  req.files;   
            if (files){
                files.forEach((file) => {
                    let url = "/images/tablas/"+file.filename;
                    db.TablesImages.update({
                        url: url
                    }, {
                        where: {
                            table_id: updatedTable.id
                        }
                    })
                })
            }  
        })
        .then(() => {
            res.redirect("/tablas/" + req.params.id);
        })
    },

    destroy: (req, res) => {
        db.TablesImages.destroy({where: {table_id: req.params.id}})
        .then(() => {
            db.Tables.destroy({where: { id: req.params.id}})
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

        .then((newTable) => {
            let files =  req.files;

            if(files){  
                files.forEach((file) => {
                    let url = "/images/tablas/"+file.filename;
                    db.TablesImages.create({
                        url: url,
                        table_id: newTable.id
                    })
                })
            } else{
                db.TablesImages.create({
                    url: "/images/tablas/default.png",
                    table_id: newTable.id
                })
            }
        })

        .then(() => {
            return res.redirect("/tablas");
        })

        .catch((error) => res.send(error));
    },

};

module.exports = tablesController; 
