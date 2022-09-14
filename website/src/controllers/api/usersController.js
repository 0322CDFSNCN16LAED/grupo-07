const { Users } = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    try {
      const { rows, count } = await Users.findAndCountAll({
        limit: 5,
        attributes: ["id", "first_name", "last_name", "email"],
      });
      res.status(200).json({
        count: count,
        meta: {
          status: 200,
        },
        users: rows,
        detail: req.originalUrl + "/id",
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

  detail: (req, res) => {
    Users.findOne({
      where: { id: req.params.id },
      attributes: ["id", "first_name", "last_name", "email", "image"],
    }).then((user) => {
      res.status(200).json({
        meta: {
          status: 200,
        },
        user,
        detail: req.originalUrl,
      });
    });
  },
};
