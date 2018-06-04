var express = require('express');
var router = express.Router();
var mongoose =  require('mongoose');
var fs = require("fs");

var SeatModel = require("../models/seat");


router.get("/",(req,res)=>{
    SeatModel.getAllSeats(
        (err,result)=>{
            if(!err){
                res.json(result);
            }else{
                res.json(err);
            }
        }
    )
});

module.exports = router;