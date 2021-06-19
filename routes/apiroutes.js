const db = require("../db/db.json")
const router = require('express').Router();


router.get("/notes",(req,res)=>{
    console.log("My name is Christi");
    res.send(db);
})
router.post("/notes",(req,res)=>{
    console.log("trying to post");
    console.log(req.body);
    res.send(db);
})
module.exports=router;