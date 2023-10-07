// Budget API
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const budgetModel = require("./models/budget");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const url = "mongodb://localhost:27017/week08";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`API served at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/budget", (req, res) => {
  budgetModel
    .find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err.message));
});

app.post("/addBudgetItem", (req, res) => {
  budgetModel
    .insertMany(
      new budgetModel({
        title: req.body.title,
        value: req.body.value,
        color: req.body.color,
      })
    )
    .then((data) => res.json(data))
    .catch((err) => console.log(err.message));
});
