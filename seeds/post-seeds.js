const { Post } = require('../models');

const postData =[
    {
        title: "Super cool",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 1,
    },
    {
        title: "Neato",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 2,
    },
    {
        title: "Best thing since slice bread",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 3,
    },
    {
        title: "WOW just wow",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 4,
    },
    {
        title: "Never been happier",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 5,
    },
    {
        title: "Chefs kiss",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 6,
    },
    {
        title: "Stoked about this application",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 7,
    },
    {
        title: "Saved me so much time",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 8,
    },
    {
        title: "Great new tech!",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 9,
    },
    {
        title: "Made everything so much easier",
        post_content: "Donec posuere metus vitae ipsum",
        user_id: 10,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

