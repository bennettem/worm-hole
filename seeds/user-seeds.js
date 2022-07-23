const { User } = require('../models');

const userData = [
  {
    username: 'spookyworm',
    password: 'password123'
  },
  {
    username: 'slipperynoodle',
    password: 'password123'
  },
  {
    username: 'bunnyhead',
    password: 'password123'
  },
  {
    username: 'mrpickles',
    password: 'password123'
  },
  {
    username: 'groovycat',
    password: 'password123'
  },
  {
    username: 'bigfish',
    password: 'password123'
  },
  {
    username: 'muffinman',
    password: 'password123'
  },
  {
    username: 'kitkatlover',
    password: 'password123'
  },
  {
    username: 'crispychickenhead',
    password: 'password123'
  },
  {
    username: 'nuggetmcgee',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData); 

// {individualHooks: true});

module.exports = seedUsers;