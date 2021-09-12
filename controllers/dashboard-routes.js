const router = require("express").Router();
const { Comment, User } = require("../models/");


router.get("/", (req, res) => {
  console.log("dashboard route hit")
  Comment.findAll({
    attributes: ['id', 'comment_text', 'user_id']
  }).then(data => {
    console.log(data)
  })
  res.render('dashboard')
});


module.exports = router;