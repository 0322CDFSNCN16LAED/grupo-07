const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./products.json");
const commentsFilePath = path.join(__dirname, "./comments.json");
const usersFilePath = path.join(__dirname, "./users.json");

module.exports = {
    getProducts: function () {
        return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    },

    // Guardar usuario en la db 
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
    
    // Buscar al usuario
    getUsers: function () {
        return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    },
    saveUsers: function (users) {
        const fileTxt = JSON.stringify(users, null, 4);
        
        fs.writeFileSync(usersFilePath, fileTxt);
    },

    findAll: function () {
        return this.getUsers();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id );
        return userFound;
    },
    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text );
        return userFound;
    },
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.find(oneUser => oneUser.id !== id );
        fs.writeFileSync(this.usersFilePath, JSON.stringify(finalUsers, null, ""));
        return true;
    }
};