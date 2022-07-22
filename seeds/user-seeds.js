const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'spookyworm',
    email: 'spookyworm@cbc.ca',
    password: 'password123'
  },
  {
    username: 'slipperynoodle',
    email: 'slippernoodle@sogou.com',
    password: 'password123'
  },
  {
    username: 'bunnyhead',
    email: 'bunnyhead@last.fm',
    password: 'password123'
  },
  {
    username: 'mrpickles',
    email: 'pickles@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'groovycat',
    email: 'catgrooves@weather.com',
    password: 'password123'
  },
  {
    username: 'bigfish',
    email: 'bigfish@imdb.com',
    password: 'password123'
  },
  {
    username: 'muffinman',
    email: 'muffinman@feedburner.com',
    password: 'password123'
  },
  {
    username: 'kitkatlover',
    email: 'kklover2@china.com.cn',
    password: 'password123'
  },
  {
    username: 'crispychickenhead',
    email: 'chicken8@google.ru',
    password: 'password123'
  },
  {
    username: 'nuggetmcgee',
    email: 'nuggies@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;