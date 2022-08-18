const { table } = require("console");
const path = require("path");
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

        db.Accessories.findByPk(id)

        .then((accessorio)=>{
            res.render("producto", { product: accessorio })
        })
    },

    edit: (req, res) => {
        let id = req.params.id;

        db.Accessories.findByPk(id)

        .then((accesorio)=>{
            res.render("editar-productos", {productToEdit: accesorio})
        })
    },


    update: (req, res) => {
        let id = req.params.id;

        db.Tables.findByPk(id)
        .then((tabla) => {
            tabla.update({
                ...req.body,
            });

            if (req.file) {
                tabla.image = req.file.filename;
            }

            tabla.save()
            .then(() => {
                res.redirect("/tablas/" + req.params.id);
            });
        });
    },


    create: (req, res) => {
        db.Accessories.create({
            ...req.body,
        }).then(function () {
            res.redirect("/tablas");
        });
    },

    store: (req, res) => {
        const newTable = req.body;

        if (products.length) {
          newProduct.id = products[products.length - 1].id + 1;
        } else {
          newProduct.id = 1;
        }
    
        products.push(newProduct);
    
        db.saveProducts(products);
    
        res.redirect("/productos/" + newProduct.id);
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

module.exports = accessoriesController; 