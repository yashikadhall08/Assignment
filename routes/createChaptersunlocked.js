const express = require('express');
const router = express.Router();
const db = require("../config/database");
const Chaptersunlocked = require('../models/Chaptersunlocked');

router.post('/',async (req,res) => {
    let {userId, contentId, numberOfChaptersUnlocked} = req.body;
    try{
        await Chaptersunlocked.create({
            userId,
            contentId,
            numberOfChaptersUnlocked
         });
         
       res.sendStatus(200); 
    }
    catch(err){
        res.status(404).send("Either the user or content does not exist");
    }
       
});     


module.exports= router;