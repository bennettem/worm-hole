const { Post } = require('../models');

const postdata =[
    {
        title: "Super cool",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 1
    },
    {
        title: "Neato",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 2
    },
    {
        title: "Best thing since slice bread",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 3
    },
    {
        title: "WOW just wow",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 4
    },
    {
        title: "Never been happier",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 5
    },
    {
        title: "Chefs kiss",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 6
    },
    {
        title: "Stoked about this application",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 7
    },
    {
        title: "Saved me so much time",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 8
    },
    {
        title: "Great new tech!",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 9
    },
    {
        title: "Made everything so much easier",
        post_url: "Donec posuere metus vitae ipsum",
        user_id: 10
    },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

