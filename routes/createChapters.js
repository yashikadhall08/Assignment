const express = require('express');
const router = express.Router();
const db = require("../config/database");
const Chapter = require("../models/Chapter");

router.post('/',async (req,res) => {
    let {title,contentId, seqNumber} = req.body;
    
    try{
        await Chapter.create({
            title,
            contentId,
            seqNumber 
          });  
          
        res.sendStatus(200); 
    }
    catch(err){
        res.status(404).send(err)
    }
       
});     


module.exports= router;