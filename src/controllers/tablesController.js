const { table } = require("console");
const path = require("path");
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

        db.Tables.findByPk(id)

        .then((tabla)=>{
            res.render("producto", { product: tabla })
        })
    },

    edit: (req, res) => {

        let id = req.params.id;

        db.Tables.findByPk(id)

        .then((tabla)=>{
            res.render("editar-productos", {productToEdit: tabla})
        })
    },

    update: (req, res) => {
        let id = req.params.id;

        db.Tables.findByPk(id)
        .then((tabla) => {
            tabla.update({
                ...req.body,
            });

            tabla.save()
            
            .then(() => {
                res.redirect("/tablas/" + req.params.id);
            });
        });
    },

    /*store: (req, res) => {
        const newTable = req.body;

        if (products.length) {
          newProduct.id = products[products.length - 1].id + 1;
        } else {
          newProduct.id = 1;
        }
    
        products.push(newProduct);
    
        db.saveProducts(products);
    
        res.redirect("/productos/" + newProduct.id);
    },*/

    create: (req, res)=>{
    },

    destroy: (req, res) => {
        let id = req.params.id;

        db.Tables.findByPk(id)

        .then((tabla)=>{
            tabla.crvrv([])
            .then(()=>{
                tabla.destroy()
                .then(()=>{
                    res.redirect("/tablas")
                })
            })
        })
    }
};

module.exports = tablesController; 
