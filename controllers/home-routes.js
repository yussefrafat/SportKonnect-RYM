const router = require("express").Router();
const {Comment, User } = require("../models/");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("home route hit")
  res.render('homepage')
});


module.exports = router;
