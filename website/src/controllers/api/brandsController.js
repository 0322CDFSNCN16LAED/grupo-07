const { Brands } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    try {
      const { rows, count } = await Brands.findAndCountAll({});
      res.status(200).json({
        count: count,
        meta: {
          status: 200,
        },
        brands: rows,
        detail: req.originalUrl,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        meta: {
          status: 500,
          detail: req.originalUrl,
          error: error.name,
          error: error.msg,
        },
      });
    }
  },
};
