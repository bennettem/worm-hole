const Comment = require("./Comment")
const Post = require("./Post");
const User = require("./User");

Comment.belongsTo(User, {
    foreignKey: "post_id",
    onDelete: "SET NULL"
});

Comment.belongsTo(Post, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});


module.exports = {
    Comment,
    Post,
    User
}
