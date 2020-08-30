"use strict";

var express = require('express');

var app = express();

require('dotenv').config();

var port = process.env.PORT || 5000; // console.log that your server is up and running

app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
}); // create a GET route

app.get('/express_backend', function (req, res) {
  res.send({
    express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
  });
});