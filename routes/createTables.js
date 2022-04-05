const express = require('express');
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User")

router.get('/',async (req,res) =>{
    try {
        db.sync({force:  true});
        res.sendStatus(200);
        
    } catch (error) {
        res.status(404).send(error);
    }
});     


module.exports= router;