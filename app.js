require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = 3001;
const app = express();


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", err => console.error(err));
db.once("open", () => console.log('Connected to database'));

app.use(express.json());


app.listen(PORT,()=> {
    console.log('Server online');
})