const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("login route hit")
  res.render('signup')
});


module.exports = router;