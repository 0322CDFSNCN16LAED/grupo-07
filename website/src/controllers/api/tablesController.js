const { Tables } = require("../../database/models");

module.exports = {
  list: (req, res) => {
    Tables.findAll({
      include: ["brand"],
      attributes: ["id", "type", "description", "price", "discount"],
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
      include: ["brand"],
      where: { id: req.params.id },
      attributes: ["id", "type", "description"],
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
