var express = require('express');
var app = express();//创建一个express 对象
app.get('/', function (req, res) {
  res.send('fuck the World!');
});

var server = app.listen(3001, 'localhost',function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});