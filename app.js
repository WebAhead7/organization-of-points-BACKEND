require("dotenv").config();
const addShape = require("./handlers/addShape");
const getShape = require("./handlers/getShape");
const getShapes = require("./handlers/getShapes");
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3001;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

app.post("/new_shape", addShape);
app.get("/get_shape/:id", getShape);
app.get("/get_shapes", getShapes);

app.listen(PORT, () => {
  console.log("Server online");
});
