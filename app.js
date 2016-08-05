var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('POST request response');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
