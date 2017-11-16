var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: 'kuyikSQL'
});

connection.connect();

// generate random data for the database
// todo: instead use npm grunt-ipsum!!!

const makeRandomString = function(n) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < n; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const makeRandomTitle = function() {
  var text = "";
  for (var i = 0; i < 6; i++) {
    text += makeRandomString(Math.floor(Math.random() * 8)) + " ";
  }
  return text;
};

const makeRandomSubtitle = function() {
  var text = "";
  for (var i = 0; i < 12; i++) {
    text += makeRandomString(Math.floor(Math.random() * 8)) + " ";
  }
  return text;
};

const makeRandomText = function(n) {
  var text = "";
  for (var i = 0; i < n; i++) {
    text += makeRandomString(Math.floor(Math.random() * 8)) + " ";
  }
  return text;
};

const sampleLocations = ['Boston', 'Thailand', 'Hawaii', 'Costa Rica', 'Morocco', 'Zanzibar'];
const getRandomLocation = function() {
  return sampleLocations[Math.floor(Math.random() * sampleLocations.length)];
};



// populate locations table
for (var i = 0; i < sampleLocations.length; i++) {
  let locationEntry = { location: sampleLocations[i] };
  connection.query('INSERT INTO Locations SET ?', locationEntry,
    (err, results, fields) => {
      if (err) { console.log(err); }
    }
  );
}

// populate users table
for (var i = 0; i < 10; i++) {
  let userEntry = { 
    username: makeRandomString(7),
    // password: makeRandomString(13),
    email: makeRandomString(8) + '@' + makeRandomString(6) + '.com',
    about_me: makeRandomText(30)
  };
  connection.query('INSERT INTO Users SET ?', userEntry,
    (err, results, fields) => {
      if (err) { console.log(err); }
    }
  );
}

// populate posts table
for (var i = 0; i < 10; i++) {
  let postsEntry = { 
    id_users: Math.floor(Math.random() * 10),
    title: makeRandomTitle(),
    subtitle: makeRandomSubtitle(),
    id_mongo_text: Math.floor(Math.random() * 10),
    id_locations: Math.floor(Math.random() * sampleLocations.length)
  };
  connection.query('INSERT INTO Posts SET ?', postsEntry,
    (err, results, fields) => {
      if (err) { console.log(err); }
    }
  );
}
