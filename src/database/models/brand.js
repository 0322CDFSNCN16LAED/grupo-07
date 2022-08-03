module.exports = function (sequelize, datatypes) {
    const brand = sequelize.define(
        "Brand",
        {
            id: datatypes.INT(11),
            name: datatypes.VARCHAR(30)
        },
        {
            tableName:
                "brands" /*****nombre de la tabla en la base de datos****/,
            timestamps: true /******define que tiene fijo create y update************/,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return brand;
};