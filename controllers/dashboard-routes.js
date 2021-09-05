

const router = require("express").Router();
const { Comment, User } = require("../models/");


router.get("/", (req, res) => {
  console.log("dashboard route hit")
  Comment.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ['id', 'comment_text', 'user_id']
  })
  res.render('dashboard')
});


module.exports = router;