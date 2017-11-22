const mongoose = require('mongoose');
const faker = require('faker');
const mongoUri = 'mongodb://localhost/kuyikMongo';
mongoose.Promise = global.Promise;

mongoose.connect(mongoUri, { useMongoClient: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('Mongo connection error:');
});

db.once('open', function() {
  console.log('Mongo connection successful');
});

const postSchema = new mongoose.Schema({
  id: Number,
  text: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports.Post = Post;
