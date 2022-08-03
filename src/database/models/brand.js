module.exports = function (sequelize, datatypes) {
    const Brand = sequelize.define(
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

    Brand.associate = function(models) {
        Genre.hasMany(models.Table, { 
            as: "brand_id", 
            foreignKey: "id"
        })
    }

    Brand.associate = function(models) {
        Genre.hasMany(models.Accesory, { 
            as: "brand_id", 
            foreignKey: "id"
        })
    }

    return Brand;
};