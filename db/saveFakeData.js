const faker = require('faker');
// var mysql = require('mysql2');
var orm = require('./orm.js');
var mongo = require('./mongo.js');

/* generate data for the sql database user faker */

let mongoIds = [];

orm.db.sync({force: true})
  .then(() => {

    mongo.Post.count({})
      .then(count => {
        if (count >= 50) { 
          throw count; 
        } else { 
          return mongo.Post.remove({}); 
        }
      })
      .then(() => {
        let data = makeFakePosts(50);
        return mongo.Post.create(data);
      })
      .then(() => {
        return mongo.Post.find({})
          .select('_id');
      })
      .then(ids => {
        mongoIds = ids;
        saveSQLData();
      })
      .catch(err => {
        if (typeof err === 'number') { 
          console.log('Data already in mongo!'); 
        } else {
          console.log('Mongo error! (At saveFakeData)');
        }
      });      

    function makeFakePosts(n) {
      let posts = [];
      for (var i = 0; i < n; i++) {
        let text = faker.lorem.paragraphs(5);
        let post = new mongo.Post({ text });
        posts.push(post);
      }
    }

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





