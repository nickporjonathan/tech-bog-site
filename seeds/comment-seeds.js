const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "You are right",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "I don't know about that one boss",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "That's amazing",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "I am Plankton",
    user_id: 3,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
