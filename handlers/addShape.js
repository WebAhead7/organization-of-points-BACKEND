const {Shape, lineSchema, pointSchema} = require("../db/shape");

const addShape = async (req, res, next) => {

  const incomingShape = new Shape({
    lines: req.body,
  });

  try {
    const result = await incomingShape.save();
    console.log(result);
    res.json(result).status(200);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

module.exports = addShape;
