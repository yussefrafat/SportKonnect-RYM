const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'rayan',
    email: 'abc@123.com',
    password: 'password'
  },
  {
    username: 'yussef',
    email: 'abcd@123.com',
    password: 'password'
  },
  {
    username: 'miko',
    email: 'abcde@123.com',
    password: 'password'
  },
  {
    username: 'matt',
    email: 'abcdef@123.com',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;