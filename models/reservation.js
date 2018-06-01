var mongoose = require("mongoose");

//plugin which adds pre-save validation for unique fields
var uniqueValidator = require('mongoose-unique-validator');

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
      unique:true
    },
    seat_number:{
        type:Number,
        required:true,
        unique:true
    },
    created_at:{
      type:String
    }
  });

  // order plugins
reservations.plugin(autoIncrement.plugin, {
    model: 'reservations',
    startAt: 1001,
});
reservations.plugin(uniqueValidator);

//Model Register
mongoose.model("contacts",contacts);

var ReservationModel = {};

ReservationModel.model = mongoose.model("reservations");

module.exports = ReservationModel
