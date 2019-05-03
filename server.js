var http = require('http');

var express = require('express');
var app = express();

app.listen(301);

app.get('/chinatour', function(req, res) {
    res.json('about');
});

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(301);