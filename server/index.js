require('dotenv').config();
const express = require('express');
let app = express();


app.use(express.static(__dirname + '/../client'));

app.listen(process.env.PORT, () => {
  console.log('LISTENING ON PORT 5000 !!!');
});
