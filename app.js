var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();

var mongoose = require("mongoose");

//connect to mongodb
mongoose.connect("mongodb://localhost/fligth_reservation313");

//register models
fs.readdirSync(path.join(__dirname,"models")).forEach(function (filename) {
    require("./models/"+filename);
});
app.use((req,resp,next)=>{
    resp.header("Access-Control-Allow-Origin","*");
    resp.header("Access-Control-Allow-Headers","Content-Type,x-access-token");
    resp.header("Access-Control-Allow-Methods","GET,POST")
    next();
  });

//add body-parser middleware
app.use(bodyParser.json());

var reservation = require('./controllers/reservation');
app.use('/reservation',reservation);

var seat = require('./controllers/seat');
app.use('/seat',seat);

//start listenning
app.listen(9090,function(){
    console.log("Starting....")
});
