var mongoose = require("mongoose");

var options = {
  connectTimeoutMS: 5000,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(
  "mongodb+srv://guigui:antoinelebg@cluster0.r5p4l.mongodb.net/myFirstDatabase",
  options,
  function (err) {
    console.log(err);
  }
);

module.exports = mongoose;
