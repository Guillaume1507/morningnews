const mongoose = require("mongoose");

const wishSchema = mongoose.Schema({
  title: String,
  desc: String,
  img: String,
});
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  language: { type: String, default: "es" },
  wishList: [wishSchema],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
