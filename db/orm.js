require('dotenv').config();
const Sequelize = require('sequelize');
let db = new Sequelize('kuyikSQL', 
  process.env.SQL_USERNAME, 
  process.env.SQL_PASSWORD, 
  {
    host: process.env.SQL_HOST,
    dialect: 'mysql'
  }
);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log('Host: ', process.env.SQL_HOST);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Posts = db.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_users: Sequelize.TEXT, // eslint-disable-line camelcase
  title: Sequelize.STRING,
  subtitle: Sequelize.STRING,
  pics: Sequelize.STRING,
  id_mongo_text: Sequelize.INTEGER, // eslint-disable-line camelcase
  id_locations: Sequelize.INTEGER, // eslint-disable-line camelcase
});


const Locations = db.define('Locations', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location: Sequelize.STRING
});


const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  about_me: Sequelize.TEXT, // eslint-disable-line camelcase
  pic: Sequelize.STRING
});


const Sessions = db.define('Sessions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_users: Sequelize.INTEGER, // eslint-disable-line camelcase 
  hash: Sequelize.STRING
});


searchFrontPosts = () => {
  return Posts.findAll();
  // TO DO
  // Add limit and filter once decided, such as top 20 most recent posts or top 10 liked posts
};

searchAllPosts = (query) => {
  return Posts.findAll({
    include: [
      { title: query, required: true }
    ]
  });
};

module.exports.db = db;
module.exports.Posts = Posts;
module.exports.Locations = Locations;
module.exports.Users = Users;
module.exports.Sessions = Sessions;
module.exports.searchAllPosts = searchAllPosts;
module.exports.searchFrontPosts = searchFrontPosts;
