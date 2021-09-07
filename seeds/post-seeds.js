const sequelize = require('../config/connection');
const { Post } = require('../models');

const postData = [
    {
        title: "Lebron dunked on Curry",
        post_url: "https://www.youtube.com"
    },
    {
        title: "Lebron dunked on Durant",
        post_url: "https://www.youtube.com"
    },
    {
        title: "Lebron dunked on Kawhi",
        post_url: "https://www.youtube.com"
    },
    {
        title: "Lebron dunked on Harris",
        post_url: "https://www.youtube.com"
    },
    {
        title: "Lebron dunked on Kyrie",
        post_url: "https://www.youtube.com"
    }
]

const seedPost = () => Post.bulkCreate(postData, {individualHooks: true});

module.exports = seedPost;