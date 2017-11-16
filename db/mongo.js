const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/kuyikMongo', { useMongoClient: true });


const Post = mongoose.model('Post', { text: String });

Post.find({}, (err, mongoPosts) => {

  console.log(mongoPosts.length);

  if (mongoPosts.length < 50) {
    for (var i = 0; i < 50; i++) {
      let text = faker.lorem.paragraphs(5);
      let post = new Post({ text });
      post.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Saved new post');
        }
      });
    }
  }
});


module.exports.Post = Post;