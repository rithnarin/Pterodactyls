require('dotenv').config();
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require('../db/orm.js');
const mongo = require('../db/mongo.js');

// comment out if db already populated
const fakeData = require('../db/saveFakeData.js');

let app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
  let sqlPosts = []; // need this external variable!!
  db.searchFrontPosts() // get posts from sql for the home page
    .then(results => {
      sqlPosts = results; // set external variable
      return db.getMongoTextsForSqlResults(sqlPosts);
    })
    .then(results => {
      let mongoTexts = {}; // transform results into easier-to-use form
      results.forEach(record => mongoTexts[record._id] = record.text);
      res.send(db.addMongoTextsToSqlResults(sqlPosts, mongoTexts));
    })
    .catch(err => console.log('GET /home error:', err));
});

app.get('/search', (req, res) => {
  let sqlPosts = [];
  db.searchAllPosts(req.query.search)
    .then(posts => { 
      sqlPosts = posts; // set external variable
      return db.getMongoTextsForSqlResults(sqlPosts);
    })
    .then(results => { // use external variable --v
      return db.addMongoTextsToSqlResults(sqlPosts, results);
    })  
    .then(allPosts => {
      let filteredPosts = [];
      // Filter for post where the query is part of the title, author, or location
      allPosts.map(post => {
        let q = req.query.search.toLowerCase();
        if (post.title.toLowerCase().includes(q) || post.author.toLowerCase().includes(q) || post.location.toLowerCase().includes(q)) {
          filteredPosts.push(post);
        }
      });
      res.send(filteredPosts);
    })
    .catch(err => console.log('GET /search error:', err));
  console.log(req.query.search);

});

app.post('/posts', (req, res) => {
  console.log('req.body is: ', req.body);
  let newPost = { 
    // find or create user id below...
    id_users: 99999, // eslint-disable-line camelcase
    title: req.body.title,
    subtitle: req.body.subtitle,
    id_locations: 99999, // eslint-disable-line camelcase
    // pics: req.body.pics, 
    // create mongo text id below...
    id_mongo_text: '' // eslint-disable-line camelcase
  };
  db.Users.findOrCreate({where: {username: req.body.author}})
    .spread((user, created) => {
      console.log('user from db: ', user);
      newPost.id_users = user.get('id'); // eslint-disable-line camelcase
    })
    .then(() => {
      db.Locations.findOrCreate({where: {location: req.body.location}})
        .spread((loc, created) => {
          console.log('loc from db: ', loc);
          newPost.id_locations = loc.get('id'); // eslint-disable-line camelcase
        });    
    })
    .then(() => {
      let mongoText = new mongo.Post({text: req.body.main});
      return mongoText.save();
    })
    .then(savedText => {
      newPost.id_mongo_text = savedText['_id'].toString(); // eslint-disable-line camelcase
      db.Posts.create(newPost);
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
