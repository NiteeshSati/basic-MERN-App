var express=require("express");
//const { modelNames } = require("mongoose");
var mongoose=require("mongoose");

var schema=mongoose.Schema;
router=express.Router();

var empschema=new schema({
    id:String,name:String,salary:String

})

var Emp=mongoose.model('emp',empschema,'emp');

router.get("/employee",function(req,resp){
    Emp.find().exec(function(err,data){
        if(err){
            resp.status(500).send("no data found");

        }
        else
        {
            console.log(data);
            resp.send(data);
        }
    })

});

router.post('/login',function(req,resp){
    Emp.findOne({id:req.body.id,name:req.body.name},function(err,data){
        if(err){
            console.log("wrong id");
            resp.status(500).send("wrong id");
        }
        else{
                resp.send("approved");

        }
    })
})

module.exports=router;