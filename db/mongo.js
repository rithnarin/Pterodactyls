const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/kuyikMongo', { useMongoClient: true });

const Post = mongoose.model('Post', { text: String });

module.exports.Post = Post;