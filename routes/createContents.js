const express = require('express');
const router = express.Router();
const db = require("../config/database");
const Content = require("../models/Content");

router.post('/',async (req,res) => {
    let {title, numberOfChapters} = req.body; 
    
    try{
      await Content.create({
        title,
        numberOfChapters
      });  
      
    res.sendStatus(200);

    }
    catch(err){
      res.status(404).send(err);
    }
      
});     


module.exports= router;