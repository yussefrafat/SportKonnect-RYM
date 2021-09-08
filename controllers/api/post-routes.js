const router = require('express').Router();
const { User, Post,  Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', (req, res) => {
    console.log('======================')
    console.log("POST GET ROUTE HIT REQQQQ");
    Post.findAll({
      // attributes: [
      //   'id',
      //   'post_url',
      //   'title',
      //   'created_at'
      // ],
      // include: [
      //   {
      //     model: Comment,
      //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      //     include: {
      //       model: User,
      //       attributes: ['username']
      //     }
      //   },
      //   {
      //     model: User,
      //     attributes: ['username']
      //   }
      // ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    console.log("GET POST ROUTE", req.params.id)
    Post.findOne({
      where: {
        id: req.params.id
      },
      // attributes: [
      //   'id',
      //   'post_url',
      //   'title',
      //   'created_at'
      // ],
      // include: [
      //   {
      //     model: Comment,
      //     attributes: ['id', 'comment_text', 'user_id', 'created_at'],
      //     include: {
      //       model: User,
      //       attributes: ['username']
      //     }
      //   },
      //   {
      //     model: User,
      //     attributes: ['username']
      //   }
      // ]
    }).then(data => {
      if(!data){
        res.status(404).json({ message: 'no post found with this id'});
        return;
      }
      res.json(data)
    })
    .catch(err => {
      console.log("POST GET ERROR",err);
      res.status(500).json(err);
    });
  });

  router.post('/', (req, res) => {
    Post.create({
      title: req.body.title,
      post_url: req.body.post_url,
      // user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;