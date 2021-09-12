
const router = require("express").Router();
const {Comment, User, Post } = require("../models/");


// get all posts for homepage
// router.get("/", (req, res) => {
//   console.log("home route hit")
//   res.render('homepage')
// });

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'title',
      'post_url'
    ]
  }).then(data =>{
    console.log('data:', data)
    const posts = data.map(post => post.get({plain: true}));
    console.log('post:', posts)
    res.render('homepage')
  })
})

router.get('/login', (req, res) => {
  if(req.session.loggedIn){
    res.redirect('/');
    return;
  }
  res.render('login')
})

module.exports = router;