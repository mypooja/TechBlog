const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "sunny Day",
    "postContent": "This is a sunny day",
    "userId": 1
  },
  {
    "postTitle": "weather",
    "postContent": "Today is too cold",
    "userId": 2
  },
  {
    "postTitle": "Birthday",
    "postContent": "His birthday is on 20th dec",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;