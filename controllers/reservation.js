var express = require('express');
var router = express.Router();
var mongoose =  require('mongoose');
var fs = require("fs");
var emailValidator = require("email-validator");

var ReservationModel = require("../models/reservation");


router.get("/",(req,res)=>{
    SeatModel.getAllReservations(
        (err,result)=>{
            if(!err){
                res.json(result);
            }else{
                res.json(err);
            }
        }
    )
});
router.post("/add",(req,res)=>{
    //=================================add required validations======================
    reservation = req.body;

     //email validation
    if(!emailValidator.validate(reservation.email)){ 
        //return unvalid mail
        res.json({message:"unvalid email"});
    
    }//telephone validation
    else if (! /^\d{11}$/.test(reservation.telephone)) {
        //return unvalid number
        res.json({message:"unvalid telephone number - should be 11 numbers"});
    }
    else{
        ReservationModel.add(reservation,(err,doc)=>{
            if(!err){
                res.send({message:"success" ,code :200 , data:doc});
            }else{
                res.send({message:"error",err});
            }
        });
    }
    
});

module.exports = router;