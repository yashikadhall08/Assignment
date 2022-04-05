const express = require('express');
const router = express.Router();
const db = require("../config/database");
const Metadata = require('../models/Metadata');

router.post('/',async (req,res) => {
    let {textData,chapterId} = req.body;
     
    try{
        await Metadata.create({
            textData,
            chapterId
         });  
         
       res.sendStatus(200); 
    }
    catch{
        res.status(404).send(err);
    }
       
});     


module.exports= router;