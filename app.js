var express = require('express');
 
var app = express();
var test=1; 
app.get('/', function (req, res) {
  res.send('hello jenkins');
});
 
app.listen(process.env.PORT || 80);
 
module.exports = app;
