var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/fligth_reservation313");
autoIncrement.initialize(connection);

//ORM Mapping
var Schema = mongoose.Schema;

var seats = new Schema(
  {
    number:{
      type:Number,
      required:true,
      unique:true
    },
    available:{
      type:Boolean
    }
  });



//Model Register
mongoose.model("seats",seats);

var SeatsModel = {};

SeatsModel.model = mongoose.model("seats");

SeatsModel.reserveSeat =  (seat_number, callback)=> {
  SeatsModel.model.findOneAndUpdate({number:seat_number},{available:false},(error, doc)=>{
      callback(error, doc)
    });
};


SeatsModel.getAllSeats =  (callback)=> {
  SeatsModel.model.find({},(error, doc)=>{
      callback(error, doc)
    });
};
module.exports = SeatsModel
