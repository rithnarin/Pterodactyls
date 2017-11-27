var authorization = '344d0c2bda3cbb1f9f7352b777d43aa311787a5f';
var clientId = 'bb82a8574f4bf86';
var request = require("request");

let uploadImage = (image, callback) => {
  let options = {
    method: "POST",
    hostname: [
      "api",
      "imgur",
      "com"
    ],
    path: [
      "3",
      "image" //binary file, base63 data, or a URL
    ],
    headers: {
      authorization: `Client-ID ${clientId}`
    }
  };

  request(options, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      callback(JSON.parse(body));
    }
  })
}
