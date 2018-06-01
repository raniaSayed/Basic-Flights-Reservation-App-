var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();

var mongoose = require("mongoose");

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/fligth_reservation313");

//register models
fs.readdirSync(path.join(__dirname,"models")).forEach(function (filename) {
    require("./models/"+filename);
});

//api body-parser middleware
app.use(bodyParser.json());

var reservation = require('./controllers/reservation');
app.use('/reservation',reservation);

//start listenning
app.listen(9090,function(){
    console.log("Starting....")
});
