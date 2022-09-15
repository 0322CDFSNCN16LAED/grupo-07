const { Accessories } = require("../../database/models");

module.exports = {
  list: (req, res) => {
    Accessories.findAll({
      include: ["brand"],
      attributes: ["id", "type", "description", "price", "discount"],
    }).then((accessories) => {
      let respuesta = {
        meta: {
          status: 200,
          total: accessories.length,
          url: "api/accessories",
        },
        data: accessories,
      };
      res.json(respuesta);
    });
  },

  detailAccessorie: (req, res) => {
    Accessories.findOne({
      include: ["brand"],
      where: { id: req.params.id },
      attributes: ["id", "type", "description", "price", "discount"],
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
