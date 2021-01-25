const Shape = require("../db/shape");

const getShapes = async (req, res, next) => {
  try {
    const result = await Shape.find();
    if (!result) {
      res.json({ message: "no shapes available" }).status(404);
    }
    res.json(result).status(200);
  } catch (e) {
    res.status(500);
  }
};

module.exports = getShapes;
