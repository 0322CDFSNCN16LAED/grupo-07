module.exports = function (sequelize, datatypes) {
    const accessory = sequelize.define(
        "Accessories",
        {
            id: datatypes.INT(),
            type: datatypes.VARCHAR(30),
            description: datatypes.VARCHAR(1024),
            price: datatypes.DECIMAL(6,2),
            discount: datatypes.DECIMAL(2,0),
            brand_id: datatypes.INT(11)
        },
        {
            tableName:
                "accesories" /*****nombre de la tabla en la base de datos****/,
            timestamps: true /******define que tiene fijo create y update************/,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return accessory;
};