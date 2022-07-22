const Comment = require("./Comment")
const Post = require("./Post");
const User = require("./User");

//user
User.hasMany(Post, {
    foreignKey: 'user_id'
});



//post
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



//comment
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


module.exports = {
    Comment,
    Post,
    User
}
