var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();

var mongoose = require("mongoose");

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/fligth_reservation313");
app.use(bodyParser.json());

//start listenning
app.listen(9090);
