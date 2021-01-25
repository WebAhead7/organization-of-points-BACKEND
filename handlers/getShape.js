const Shape = require("../db/shape");

const getShape = async (req, res, next) => {
  try {
    const result = await Shape.findById(req.params.id);
    if (!result) {
      res.json({ message: "shape not found!" }).status(404);
    }
    res.json(result).status(200);
  } catch (e) {
    res.status(500);
  }
};

module.exports = getShape;
