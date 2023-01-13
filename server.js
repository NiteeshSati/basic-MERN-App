var express = require("express");
var app= express();
var path= require("path");
var mongoose = require("mongoose");
var bodyparser=require("body-parser");
var routes=require("./routes/router")

var cors=require("cors");

mongoose.promise=global.promise;

const url = "mongodb://0.0.0.0:27017/emp"

mongoose.connect(url,function(err,resp){

    if(err){
        console.log("connection not establised");
         console.log(err);
    }
    else
    console.log("connection established");

})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname,"public")))//optional
app.use(cors('*'));

app.use("/",routes);

app.listen(4000);
console.log("server is listenting at 3000");

module.exports=app;

