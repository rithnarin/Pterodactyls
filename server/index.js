require('dotenv').config();
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require('../db/');
let app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  db.searchAllPosts(req.query.search)
  .then(posts => res.send(posts));
});

app.listen(process.env.PORT, () => {
  console.log('LISTENING ON PORT 5000 !!!');
});
