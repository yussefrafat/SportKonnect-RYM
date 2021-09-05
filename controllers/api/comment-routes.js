const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Comment.findAll()
    .then(dataComment => res.json(dataComment))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    }).then(dataComment => res.json(dataComment))
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(dbCommentData == false){
            res.status(404).json({message: 'Cannot find this comment!'});
            return;
        }
        res.json(dbCommentData);
    }).catch(err => res.status(500).json(err))
});

module.exports = router;