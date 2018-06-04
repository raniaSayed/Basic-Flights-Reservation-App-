var mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/fligth_reservation313");
autoIncrement.initialize(connection);
//plugin which adds pre-save validation for unique fields
var uniqueValidator = require('mongoose-unique-validator');
var refValidator = require('mongoose-ref-validator');
var SeatsModel = require("../models/seats");


//ORM Mapping
var Schema = mongoose.Schema;

var reservations = new Schema(
  {
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    telephone:{
      type:Number,
      required:true,
      unique:true,
    },
    seat_number:{
        type:Number,
        required:true,
        unique:true,
        ref:"seats",
        conditions: {} // Enables validation
    },
    created_at:{
      type:String
    }
  });

  //reservation plugins
reservations.plugin(autoIncrement.plugin, {
    model: 'reservations',
    startAt: 1001,
});
reservations.plugin(uniqueValidator);
mongoose.plugin(require('mongoose-ref-validator'));


//Model Register
mongoose.model("reservations",reservations);

var ReservationModel = {};

ReservationModel.model = mongoose.model("reservations");

ReservationModel.add =  (reservation, callback)=> {
    reservation.created_at = Date.now();
    reservationObj = new ReservationModel.model(reservation);
    reservationObj.save((error, doc)=>{
      SeatsModel.reserveSeat(reservationObj.seat_number,(err,seatDoc)=>{
        if(!err){
          callback(error, doc);
        }else{
            res.send({message:"error",err});
        }
    });
    });
};

module.exports = ReservationModel
