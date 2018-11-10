var express = require('express');
var app = express();
var fs = require("fs");

app.use('/', express.static('public'));
var port = 8081;
app.listen(port);
console.log('Magic happens on url http://localhost:' + port);
