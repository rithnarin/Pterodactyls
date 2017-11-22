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
    .then(results => { // use external variable --v
      res.send(db.addMongoTextsToSqlResults(sqlPosts, results));
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
    .then(allPosts => { // use external variable --v
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

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
