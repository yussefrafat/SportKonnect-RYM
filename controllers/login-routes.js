const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("login route hit")
  res.render('loginpage')
});

router.get('/login', (req, res) => {
  res.redirect('/')
})


module.exports = router;