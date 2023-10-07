const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
    match: /^#([0-9a-f]{3}){1,2}$/,
  },
});

module.exports = mongoose.model("items", budgetSchema);
