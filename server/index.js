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
  db.searchAllPosts() // get posts from sql
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
  db.searchAllPosts(req.query.search)
    .then(posts => res.send(posts));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
