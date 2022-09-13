const { Accessories } = require("../../database/models");
const { Tables } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    let tablas = await Tables.findAndCountAll({
      include: ["brand"],
      limit: 4,
      attributes: ["id", "type", "description"],
    });
    let accesorios = await Accessories.findAndCountAll({
      include: ["brand"],
      limit: 4,
      attributes: ["id", "type", "description"],
    });
    Promise.all([tablas, accesorios]).then(([tablas, accesorios]) => {
      res.status(200).json({
        meta: {
          status: 200,
        },
        tables: tablas,

        meta: {
          status: 200,
        },
        accessories: accesorios,
        detail: req.originalUrl + "/id",
      });
    });
  },

  detailTable: (req, res) => {
    let tabla = Tables.findOne({
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

  detailAccessorie: (req, res) => {
    let accesorio = Accessories.findOne({
      include: ["brand"],
      where: { id: req.params.id },
      attributes: ["id", "type", "description"],
    }).then((accesorio) => {
      res.status(200).json({
        meta: {
          status: 200,
        },
        accesorio,
        detail: req.originalUrl,
      });
    });
  },
};
