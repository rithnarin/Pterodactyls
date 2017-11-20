const Sequelize = require('sequelize');
let db = new Sequelize('kuyikSQL',
  process.env.SQL_USERNAME,
  process.env.SEQUELIZE_PASSWORD,
  {
    host: process.env.SQL_HOST,
    dialect: 'mysql'
  }
);
// the constructor takes a database name, username, and password
// placeholders for now

const Posts = db.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  id_users: Sequelize.INTEGER,
  title: Sequelize.STRING,
  subtitle: Sequelize.STRING,
  pics: Sequelize.STRING,
  id_mongo_text: Sequelize.INTEGER,
  id_locations: Sequelize.INTEGER,
});

const Locations = db.define('Locations', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  location: Sequelize.STRING
});

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  about_me: Sequelize.STRING,
  pic: Sequelize.STRING
});

const Sessions = db.define('Sessions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  id_users: Sequelize.INTEGER,
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

module.exports.searchAllPosts = searchAllPosts;
module.exports.searchFrontPosts = searchFrontPosts;
