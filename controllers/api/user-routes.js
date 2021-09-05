const router = require('express').Router();
const {User, Like, Post, Comment} = require('../../models');

router.post('/', (req, res) => {
    console.log('================================')
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dataUser => {
        req.session.save(()=> {
            req.session.user_id = dataUser.id;
            req.session.username = dataUser.username;
            req.session.loggedIN = true;
        })
    })
})