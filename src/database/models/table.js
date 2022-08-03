module.exports = function (sequelize, datatypes) {
    const table = sequelize.define(
        "Tables",
        {
            id: datatypes.INT(11),
            type: datatypes.VARCHAR(30),
            description: datatypes.VARCHAR(1024),
            price: datatypes.DECIMAL(6,2),
            discount: datatypes.DECIMAL(6,2),
            table_length: datatypes.DECIMAL(6,2),
            table_expertise: datatypes.VARCHAR(30),
            table_volume: datatypes.DECIMAL(6,2),
            table_thickness: datatypes.DECIMAL(6,2),
            table_material: datatypes.VARCHAR(30),
            table_keels: datatypes.VARCHAR(30),
            brand_id: datatypes.INT(11),
            table_image: datatypes.INT(11)
        },
        {
            tableName:
                "tables" /*****nombre de la tabla en la base de datos****/,
            timestamps: true /******define que tiene fijo create y update************/,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return table;
};