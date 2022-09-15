const { Tables } = require("../../database/models");

module.exports = {
  list: (req, res) => {
    Tables.findAll({
      include: ["brand"],
      attributes: ["id", "type"],
    }).then((tablas) => {
      let respuesta = {
        meta: {
          status: 200,
          total: tablas.length,
          url: "api/tablas",
        },
        data: tablas,
      };
      res.json(respuesta);
    });
  },

  detailTable: (req, res) => {
    Tables.findOne({
      attributes: [
        "id",
        "type",
        "description",
        "price",
        "discount",
        "table_length",
        "table_expertise",
      ],
      include: ["brand"],
      where: { id: req.params.id },
    }).then((tabla) => {
      res.status(200).json({
        meta: {
          status: 200,
        },
        tabla,
        detail: req.originalUrl,
      });
    });
  },
};
