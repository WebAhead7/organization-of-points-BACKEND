const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  id: { type: Number, required: true },
  birthdate: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
