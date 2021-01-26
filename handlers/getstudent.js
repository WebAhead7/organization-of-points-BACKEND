const Student = require("../db/students");

const getStudent = async (req, res, next) => {
  let result;
  try {
    result = await Student.find({ id: req.body.id });
    if (result) {
      res.json({ message: "student already exicts!" }).status(404);
      return;
    }
  } catch (e) {
    console.log(e.message);
  }
  next();
};

module.exports = getStudent;
