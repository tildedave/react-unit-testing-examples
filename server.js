var http = require('http');
var express = require('express');
var app = express();
var browserify = require('browserify-middleware');
var fs = require('fs');

browserify.settings({ transform: ['babelify'] });

app.use(express.static('app'));
app.get('/js/bundle.js', browserify(__dirname + '/app.js'));

http.createServer(app).listen(3000)
