const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/kuyikMongo', { useMongoClient: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('Mongo connection error:');
});

db.once('open', function() {
  console.log('Mongo connection successful');
});

const Post = mongoose.model('Post', { id: Number, text: String });

var testPost = new Post({ text: 'This is a test post.'});
testPost.save();

module.exports.Post = Post;