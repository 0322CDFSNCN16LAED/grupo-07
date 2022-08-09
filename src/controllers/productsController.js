const path = require("path");
const fs = require("fs");
const db = require("../../data/db");
//const Tables = require("../database/models/table")
const products = db.getProducts();

const productsController = {
  index: (req, res) => {
    res.render("productos", {
      products: products,
    });
  },
  tablas: (req, res) => {
    res.render("tablas", {
      products: products,
    });
  },
  accesorios: (req, res) => {
    res.render("accesorios", {
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
    res.render("producto", { product: products[index], products: products });
  },
  store: (req, res) => {
    const newProduct = req.body;
    if (req.file) {
      if (newProduct.category == "tablas de surf") {
        newProduct.image =
          "../../public/images/tablas-de-surf/" + req.file.filename;
      } else {
        newProduct.image =
          "../../public/images/Accesorios/" + req.file.filename;
      }
    } else {
      if (newProduct.keels) {
        newProduct.category = "tablas de surf";
      } else {
        newProduct.category = "Accesorios";
      }
      newProduct.image = "../../public/images/default-image.png";
    }

    if (products.length) {
      newProduct.id = products[products.length - 1].id + 1;
    } else {
      newProduct.id = 1;
    }

    products.push(newProduct);

    db.saveProducts(products);

    res.redirect("/productos/" + newProduct.id);
  },
  edit: (req, res) => {
    const products = db.getProducts();

    let id = req.params.id;
    let productToEdit = products.find((products) => products.id == id);

    res.render("editar-productos", {
      productToEdit: productToEdit,
    });
  },
  update: (req, res) => {
    const productIndex = products.findIndex((p) => p.id == req.params.id);

    const productToEdit = req.body;

    if (req.file) {
      fs.unlinkSync(
        path.join(__dirname, "../../public", products[productIndex].image)
      );

      if (productToEdit.category == "tablas de surf") {
        productToEdit.image =
          "../../public/images/tablas-de-surf/" + req.file.filename;
      } else {
        productToEdit.image =
          "../../public/images/Accesorios/" + req.file.filename;
      }
    } else {
      productToEdit.image = products[productIndex].image;
    }

    productToEdit.id = products[productIndex].id;

    products[productIndex] = productToEdit;

    db.saveProducts(products);

    res.redirect("/productos/" + products[productIndex].id);
  },

  destroy: (req, res) => {
    const index = products.findIndex((p) => p.id == req.params.id);

    if (products[index].image != "../../public/images/default-image.png") {
      fs.unlinkSync(
        path.join(__dirname, "../../public/" + products[index].image)
      );
    }

    products.splice(index, 1);

    db.saveProducts(products);

    res.redirect("/");
  },
};

module.exports = productsController;
