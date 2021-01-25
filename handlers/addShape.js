const Shape = require("../db/shape");

const addShape = async (req, res, next) => {
  const incomingShape = new Shape({
    point_x: req.body.point_x,
    point_y: req.body.point_y,
    line_x: req.body.line_x,
    line_y: req.body.line_y,
  });

  try {
    const result = await incomingShape.save();
    res.json(result).status(200);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

module.exports = addShape;
