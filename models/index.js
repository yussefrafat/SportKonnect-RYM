const User = require("./User");
const Comment = require("./Comment")
// const Post = require("./Post");
// const Like = require("./Like");
// const Comment = require("./Comment");
// //associations

// // Like
// Like.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Like.belongsTo(Post, {
//   foreignKey: "post_id",
// });
// // Comment
// Comment.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
// });

// // User
// User.hasMany(Like, {
//   foreignKey: "user_id",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
// });

// User.hasMany(Post, {
//   foreignKey: "user_id",
// });

// // Post
// Post.belongsToMany(User, {
//   through: Like,
//   as: "user_like_post",
//   foreignKey: "post_id",
// });

// User.belongsToMany(Post, {
//   through: Like,
//   as: "like_on_post",
//   foreignKey: "post_id",
// });

// User.belongsToMany(Post, {
//   through: Comment,
//   as: "like_on_post",
//   foreignKey: "post_id",
// });

module.exports = { User, Comment }
