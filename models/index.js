const User = require("./User");
const Comment = require("./Comment")
const Post = require('./Post')
// //associations

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "SET NULL"
// });

// Post.hasMany(Comment,{
//     foreignKey: 'post_id'
// });




module.exports = { User, Comment, Post }
