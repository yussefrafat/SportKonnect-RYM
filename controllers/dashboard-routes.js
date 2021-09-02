

const router = require("express").Router();
const { Comment, User } = require("../models/");


router.get("/", (req, res) => {
  console.log("dashboard route hit")
  res.render('dashboard')
});


module.exports = router;