const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// signup page
router.get("/", (req, res) => {
  console.log("login route hit")
  res.render('signup')
});




module.exports = router;