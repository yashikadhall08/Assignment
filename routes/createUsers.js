const express = require('express');
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

router.post('/',async (req,res) => {
    let {name , email} = req.body;
    
    try {
        await User.create({
           name,
           email
         });  
         
       res.sendStatus(200);
        
    } catch (error) {
        res.status(404).send(error)
    }
      
});     
 

module.exports= router;