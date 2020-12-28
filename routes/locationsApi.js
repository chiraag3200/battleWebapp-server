// api to return the location of battles

var express=require('express')
var router=express.Router()
const mongodb = require("mongodb");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const MongoClient = mongodb.MongoClient;
const connectionUrl = "mongodb+srv://chiraagmittal05:qazplm@battledb.hd8am.mongodb.net/test"; 
const databaseName = "battleDB"; 

var locations = []
MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (error,client) => {
    if(error){
      console.log(error)
    }
    const db=client.db(databaseName);

    db.collection('data').distinct("location", (error,listOfPlaces) => {
        locations = listOfPlaces
      })
})


// router.get("/",function(req,res){
//     res.send(locations)
// })

module.exports=router 