const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Super stoked about this application!"
    },
    {
        user_id: 2,
        post_id: 10,
        comment_text: "Super stoked about this application!" 
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Super stoked about this application!" 
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;