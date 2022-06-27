const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./products.json");
const commentsFilePath = path.join(__dirname, "./comments.json");
const usersFilePath = path.join(__dirname, "./users.json");

module.exports = {
    getProducts: function () {
        return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    },
    saveProducts: function (products) {
        const fileTxt = JSON.stringify(products, null, 4);
        
        fs.writeFileSync(productsFilePath, fileTxt);
    },
    getComments: function () {
        return JSON.parse(fs.readFileSync(commentsFilePath, "utf-8"));
    },
    saveComments: function (comments) {
        const fileTxt = JSON.stringify(comments, null, 4);
        
        fs.writeFileSync(commentsFilePath, fileTxt);
    },
    getUsers: function () {
        return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    },
    saveUsers: function (users) {
        const fileTxt = JSON.stringify(users, null, 4);
        
        fs.writeFileSync(usersFilePath, fileTxt);
    },


};