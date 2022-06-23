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
    create: (req, res) => {
        res.render("crear-productos");
    },
    detail: function (req, res) {
        const index = products.findIndex(
        (products) => products.id == req.params.id
        );
        res.render("productos", { product: products[index] });
    },
    store: (req,res) => {
        const newProduct = req.body;
        if(req.file) {
            newProduct.image = "/images/" + newProduct.category + "/"+ req.file.filename ;
        } else { newProduct.image ="/images/default-image.png";}

        if (products.length) {
                newProduct.id = products[products.length-1].id + 1;
        } else {
            newProduct.id = 1;
        }
        
            //newProduct.image = "/images/Accesorios/default.png"; // si no hubiera multer

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
        const filterProducts = products.filter((prod)=>{
            return prod.id != req.params.id;
        });
        db.saveProducts(filterProducts);

        res.redirect('/');
    }
};

module.exports = productsController;