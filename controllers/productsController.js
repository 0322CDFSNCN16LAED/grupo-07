const path = require('path');
const fs = require('fs');
const db = require("../data/db");
const products = db.getProducts();

const productsController = {
    index: (req, res) => {
        res.render("productos", {
            products: products,
        });
    },
    createAccesories: (req, res) => {
        res.render("crear-productos-accesories");
    },
    createTables: (req, res) => {
        res.render("crear-productos-tables");
    },
    detail: function (req, res) {
        const index = products.findIndex(
        (products) => products.id == req.params.id
        );
        res.render("productos", { product: products[index],products:products });
    },
    store: (req,res) => {
        const newProduct = req.body;
        if(req.file) {
            if(newProduct.category=="Tablas de surf"){
              newProduct.image = "/images/Tablas-de-surf/"+ req.file.filename ;
            }else {newProduct.image = "/images/Accesorios/"+ req.file.filename ;
             }
        } else { 
            if(newProduct.keels){
                newProduct.category = "Tablas de surf";
              }else {
                     newProduct.category = "Accesorios";}
            newProduct.image ="/images/default-image.png";
                }

        if (products.length) {
                newProduct.id = products[products.length-1].id + 1;
        } else {
            newProduct.id = 1;
        }
        
        products.push(newProduct);

        db.saveProducts(products);

        res.redirect("/productos/" + newProduct.id);
            
    },
    edit: (req,res) => {
        let id = req.params.id;
        let productToEdit = products.find((product) => product.id == id);

        res.render("editar-productos", {
            productToEdit: productToEdit
        })
    },
    update: (req, res) => {
        const productIndex = products.findIndex((p)=> p.id == req.params.id);

        const product = products[productIndex];

        product.name = req.body.name;
        product.description = req.body.description;
        product.category = req.body.category;
        product.brand = req.body.brand;
        product.price = req.body.price;
        product.discount = req.body.discount;

        if (req.file) {
            const absoluteRoute = path.join(__dirname,"../../public/images/Accesorios/",product.image);
            fs.unlinkSync(absoluteRoute);
            product.image = req.file.filename;
        }

        db.saveProducts(products);

        res.redirect("/");
    },
    destroy: (req, res) => {

        const index = products.findIndex((p) => p.id == req.params.id);
         
        if(products[index].image != '/images/default-image.png')
        {
          fs.unlinkSync( path.join(__dirname,'../public/'+ products[index].image));
        }

        products.splice(index,1);  

        db.saveProducts(products);

        res.redirect("/");
    }
};

module.exports = productsController;