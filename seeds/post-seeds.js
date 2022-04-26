const { Post } = require("../models");

const postData = [
  {
    title: "Node",
    post_text: "Omg node is so cool",
    user_id: 4,
  },
  {
    title: "React",
    post_text: "Can not wait to create with react",
    user_id: 2,
  },
  {
    title: "MySQL",
    post_text: "Running sql was so easy",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
