const mongoose = require("mongoose");

const wishSchema = mongoose.Schema({
  title: String,
  desc: String,
  img: String,
});

const wishModel = mongoose.model("users", wishSchema);

module.exports = wishModel;
