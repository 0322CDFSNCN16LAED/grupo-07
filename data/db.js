const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./products.json");
const comentsFilePath = path.join(__dirname, "./coments.json");
const usersFilePath = path.join(__dirname, "./users.json");

module.exports = {
    getproducts: function () {
        return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    },
    getComents: function () {
        return JSON.parse(fs.readFileSync(comentsFilePath, "utf-8"));
    },
    getUsers: function () {
        return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    },

};