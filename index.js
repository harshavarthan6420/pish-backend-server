const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PlaceModel = require("./models/Places");
const cors = require("cors");

app.use(express.json());const corsOptions = {
  origin: ['http://localhost:3000', 'https://pish.onrender.com'], 
  credentials: true, 
};

app.use(cors(corsOptions));

mongoose.connect(
  "mongodb+srv://pish-admin:admin@pish.kt4ch8v.mongodb.net/pish?retryWrites=true&w=majority&appName=Pish"
);

app.get("/getPlaces", (req, res) => {
  PlaceModel.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.use(express.json())

app.use('/',require('./routes/authRoutes'))

app.listen(3001, () => {
  console.log("sever running");
});

module.exports = app;
