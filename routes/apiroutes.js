const path = require("path");
// const db = require("../db/db.json")
const router = require('express').Router();
const fs = require('fs');
const {v4:uuidv4} = require('uuid');




router.get("/notes",(req,res)=>{
    const db = require("../db/db.json")
    console.log("My name is Christi");
    res.status(201).json(db);
})
router.post("/notes",(req,res)=>{
    console.log("trying to post");
    


fs.readFile(path.join(__dirname,"../db/db.json"),"utf8",function(err,data){
    if (err) throw err;
    let dbNotes = JSON.parse(data);
    let newNote = req.body
    newNote.id=uuidv4()
    dbNotes.push(newNote); 
        fs.writeFile(path.join(__dirname,"../db/db.json"),JSON.stringify(dbNotes), function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.status(201).json(newNote);
    });
})

    
})



module.exports=router;



/*[
    {
        "title":"Test Title",
        "text":"Test text"
    },
    {
        "title":"Test Title2",
        "text":"Test text2"
    }
]*/