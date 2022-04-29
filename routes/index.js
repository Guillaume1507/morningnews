var express = require("express");
var router = express.Router();

// mon import des crypteurs
var bcrypt = require("bcrypt");

var uid2 = require("uid2");

var userModel = require("../models/users");
// const { default: token } = require("../reactapp/src/reducers/token");

router.post("/sign-up", async function (req, res, next) {
  var error = [];
  var result = false;
  var saveUser = null;

  // mon hash
  const hash = bcrypt.hashSync(req.body.passwordFromFront, 10);

  const data = await userModel.findOne({
    email: req.body.emailFromFront,
  });

  if (data != null) {
    error.push("utilisateur déjà présent");
  }

  if (
    req.body.usernameFromFront == "" ||
    req.body.emailFromFront == "" ||
    req.body.passwordFromFront == ""
  ) {
    error.push("champs vides");
  }

  if (error.length == 0) {
    var newUser = new userModel({
      username: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: hash,
      token: uid2(32),
    });

    saveUser = await newUser.save();

    if (saveUser) {
      result = true;
    }
  }

  res.json({ result, saveUser, error });
});

router.post("/sign-in", async function (req, res, next) {
  var result = false;
  var user = null;
  var error = [];
  // le passW qui vient du F
  var password = req.body.passwordFromFront;

  if (req.body.emailFromFront == "" || req.body.passwordFromFront == "") {
    error.push("champs vides");
  }

  if (error.length == 0) {
    const user = await userModel.findOne({
      email: req.body.emailFromFront,

      // password: req.body.passwordFromFront,
    });
    console.log(user);
    // ............................
    if (bcrypt.compareSync(password, user.password)) {
      // res.json({ login: true, user });
      token = user.token;
      result = true;
    } else {
      error.push("email ou mot de passe incorrect");
      // res.json({ login: false });
    }

    //................
    // if (user) {
    //   result = true;
    // } else {
    //   error.push("email ou mot de passe incorrect");
    // }
  }

  res.json({ result, user, error, token });
});

// router.post("/thai", async function (req, res, next) {

//   res.json({ result, user, error, token });
// });

module.exports = router;
