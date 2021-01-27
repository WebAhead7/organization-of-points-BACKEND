const mongoose = require("mongoose");
const { Schema } = mongoose;

const pointSchema = new Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
});

const lineSchema = new Schema({
  point_1: { type: pointSchema, required: true },
  point_2: { type: pointSchema, required: true },
});

const shapeSchema = new Schema({
  lines: { type: [lineSchema], required: true },
});

const Shape = mongoose.model("Shape", shapeSchema);

module.exports = {Shape, pointSchema, lineSchema };
