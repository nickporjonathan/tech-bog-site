const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
  {
    username: "Josh",
    email: "josh@josh.com",
    password: "joshpass",
  },
  {
    username: "Jess",
    email: "jess@jess.com",
    password: "jesspass",
  },
  {
    username: "Nat",
    email: "nat@nat.com",
    password: "natpass",
  },
  {
    username: "Shelby",
    email: "shelby@shelby.com",
    password: "shelbypass",
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
