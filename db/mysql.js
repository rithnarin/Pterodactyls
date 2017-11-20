var mongo = require('./mongo.js');
var mysql = require('mysql2');
var faker = require('faker');

var connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USERNAME,
  //password: process.env.SQL_PASSWORD,
  database: 'kuyikSQL'
});

connection.connect();


/* generate data for the sql database user faker */

// populate users table
// for (var i = 0; i < 30; i++) {
//   let userEntry = {
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     about_me: faker.lorem.paragraph(),
//     pic: faker.image.avatar()
//   };
//   connection.query('INSERT INTO Users SET ?', userEntry,
//     (err, results, fields) => {
//       if (err) { console.log(err); }
//     }
//   );
// }
//
// // populate locations table
// for (var i = 0; i < 30; i++) {
//   let locationEntry = {
//     location: faker.address.city() + ', ' + faker.address.country()
//   };
//   connection.query('INSERT INTO Locations SET ?', locationEntry,
//     (err, results, fields) => {
//       if (err) { console.log(err); }
//     }
//   );
// }
//
// // populate posts table
//
// mongo.Post.find({}, (err, mongoPosts) => {
//
//   // console.log(mongoPosts.length);
//
//   for (var i = 0; i < 10; i++) {
//     let mongoId = mongoPosts[i]["_id"];
//     let postsEntry = {
//       id_users: Math.floor(Math.random() * 30),
//       title: faker.lorem.words(6),
//       subtitle: faker.lorem.sentence(),
//       id_mongo_text: mongoId,
//       id_locations: Math.floor(Math.random() * 30)
//     };
//     connection.query('INSERT INTO Posts SET ?', postsEntry,
//       (err, results, fields) => {
//         if (err) { console.log(err); }
//       }
//     );
//   }
//
// });
