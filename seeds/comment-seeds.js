const sequelize = require('../config/connection');
const { User, Comment } = require('../models');

const commentData = [
    {
        comment_text: 'hello my name is rayan'
    },
    {
        comment_text: 'my name is sami'
    },
    {
        comment_text: 'my middle name is blablabla'
    },
    {
        comment_text: 'my middle name is aasfasdf'
    },
    {
        comment_text: 'my middle name is blablasdfgdgsdfgsdfgabla'
    },
    {
        comment_text: 'my middle name is blabldfdfvadffgerf3rfabla'
    },
    {
        comment_text: 'my middle name is dfgsdfgsdgdsgsrgsrtgrwtg'
    },
    {
        comment_text: 'my middle name is sakjfhjaisfhijasdhfuiashfueahf'
    },

]

const seedComments = () => Comment.bulkCreate(commentData, {individualHooks: true});

module.exports = seedComments;