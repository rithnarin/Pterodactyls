const Sequelize = require('sequelize');
let db = new Sequelize('database', 'username', 'password');
// the constructor takes a database name, username, and password
// placeholders for now

const Posts = db.define('Posts', {
  id: Sequelize.INTEGER,
  id_users: Sequelize.INTEGER,
  title: Sequelize.STRING,
  subtitle: Sequelize.STRING,
  pics: Sequelize.STRING,
  id_mongo_text: Sequelize.INTEGER,
  id_locations: Sequelize.INTEGER,
});

const Locations = db.define('Locations', {
  id: Sequelize.INTEGER,
  location: Sequelize.STRING
});

const Users = db.define('Users', {
  id: Sequelize.INTEGER,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  about_me: Sequelize.STRING,
  pic: Sequelize.STRING
});

const Sessions = db.define('Sessions', {
  id: Sequelize.INTEGER,
  id_users: Sequelize.INTEGER,
  hash: Sequelize.STRING
});
