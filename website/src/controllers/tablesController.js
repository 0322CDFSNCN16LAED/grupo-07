const db = require('../database/models');
const { validationResult } = require("express-validator");

const tablesController = {

    tables: (req, res) => {
        db.Tables.findAll({include: "tables_images"})
        .then((tablas)=>{
            res.render("tablas", {tablas: tablas, user: req.session.userLogged})
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
                            relacionado,
                            user: req.session.userLogged
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

        .then(([tabla, brands,]) => {
          
        res.render("editar-tabla", {tabla, brands, user: req.session.userLogged})
        })

        .catch((error) => console.log(error));
    },
    
    update: async (req, res) => {
        const tabla = req.body;
        tabla.id=req.params.id;


        const errors = validationResult(req);
        
        if (errors.isEmpty()) {
              const tableUpdated = 
              await db.Tables.update({
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
                             },{where: { id: req.params.id}})
            if(req.files.length!=0){
                db.TablesImages.destroy({where: {table_id: req.params.id}})
                req.files.forEach((file) => {
                    let url = "/images/tablas/"+file.filename;
                     db.TablesImages.create({
                                            url: url,
                                            table_id: req.params.id
                                          })
                             })
            }                   
             res.redirect("/tablas/"+ req.params.id);
        } else{ 
            const brands = await db.Brands.findAll()
        
            res.render("editar-tabla", { errors: errors.array(), tabla: tabla, brands: brands, user: req.session.userLogged }) }
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
            res.render("crear-tabla", {brands, user: req.session.userLogged})
        })
    },

    create: async (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
              const tableCreated = 
              await db.Tables.create({
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
            if(req.files){  
                req.files.forEach((file) => {
                    let url = "/images/tablas/"+file.filename;
                     db.TablesImages.create({
                                            url: url,
                                            table_id: tableCreated.id
                                          })
                             })
            } else{
                const tableImg = await db.TablesImages.create({
                                url: "/images/tablas/default.png",
                                table_id: newTable.id
                            })
            }
                     
             res.redirect("/tablas");
        } else{ 
            const brands = await db.Brands.findAll()
            res.render("crear-tabla", { errors: errors.array(), old: req.body, brands: brands, user: req.session.userLogged }) }
    },

};

module.exports = tablesController; 
