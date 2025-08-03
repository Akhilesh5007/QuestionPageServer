var express=require("express");
var router=express.Router();

var queServiece = require("../services/queService");

router.post("/save", async (req,res,next)=>{
    console.log(1);
    const data=req.body.data;
    const finalresult= await queServiece.serviceSave(data);
    res.send(finalresult);
});

module.exports=router;