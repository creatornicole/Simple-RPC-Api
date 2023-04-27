//JSON-RPC
var express = require('express');
var path = require('path');
var app = express();

var methods = require('./methods');

var port = 3000;

app.listen(port);

app.route('/').get(function(req, res) {
    res.sendFile(path.join(__dirname, './', 'browser.html'));
})

app.route('/rpcapi').post(function(req, res) {
    //TODO: add functionality
})