const faker = require('faker');
// var mysql = require('mysql2');
var orm = require('./orm.js');
var mongo = require('./mongo.js');

/* generate data for the sql database user faker */

let mongoIds = [];

orm.db.sync({force: true})
  .then(() => {
    mongo.Post.remove({})
      .then(() => {
        let fakePosts = [];
        for (let i = 0; i < 50; i++) {
          let fakePost = {id: i, text: faker.lorem.paragraphs(5)};
          fakePost = new mongo.Post(fakePost);
          fakePosts.push(fakePost.save());
        }
        return Promise.all(fakePosts);
      })
      .then(saved => {
        return mongo.Post.find({}, {'id': 1, '_id': 0})
          .lean();
      })
      .then(idRecords => {
        idRecords.forEach(rec => mongoIds.push(rec.id));
        Promise.resolve(saveSQLData());
      })
      .catch(err => {
        console.log('Error!', err);
      });


    function saveSQLData() {
      // populate users table
      for (var i = 0; i < 30; i++) {
        let userEntry = { 
          username: faker.internet.userName(),
          email: faker.internet.email(),
          about_me: faker.lorem.paragraph(), // eslint-disable-line camelcase
          pic: faker.image.avatar()
        };
        orm.Users.create(userEntry);
      }
      // populate locations table
      for (var i = 0; i < 30; i++) {
        let locationEntry = { 
          location: faker.address.city() + ', ' + faker.address.country() 
        };
        orm.Locations.create(locationEntry);
      }
      // populate posts table
      for (var i = 0; i < 15; i++) {
        let mongoId = mongoIds[i];
        let postsEntry = { 
          id_users: Math.floor(Math.random() * 30), // eslint-disable-line camelcase
          title: faker.lorem.words(6),
          subtitle: faker.lorem.sentence(),
          id_mongo_text: mongoId, // eslint-disable-line camelcase
          id_locations: Math.floor(Math.random() * 30) // eslint-disable-line camelcase
        };
        orm.Posts.create(postsEntry);
      }
    }

  });





