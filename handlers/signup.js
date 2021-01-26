const Student = require("../db/students");

const addStudent = async (req, res, next) => {
  const newStudent = new Student({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    id: req.body.id,
    birthdate: req.body.birthdate,
  });

  try {
    const result = await newStudent.save();
    res.json(result).status(200);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

module.exports = addStudent;
