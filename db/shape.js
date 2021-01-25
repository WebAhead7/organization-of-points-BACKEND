const mongoose = require("mongoose");
const { Schema } = mongoose;

const shapeSchema = new Schema({
  point_x: { type: Number, required: true },
  point_y: { type: Number, required: true },
  line_x: { type: String, required: true },
  line_y: { type: String, required: true },
});

const Shape = mongoose.model("Shape", shapeSchema);

module.exports = Shape;
