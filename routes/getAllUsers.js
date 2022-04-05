const express = require('express');
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

router.get('/',async (req,res) => {

    try {
        let userData = await db.query(`
        SELECT * FROM users u 
        JOIN chaptersunlocked cu ON u."id" = cu."userId"
        JOIN contents c ON c.id = cu."contentId" `)
        
        res.status(200).send(userData[0]);
        
    } catch (error) {
        res.status(404).send(error)
    }

});     
 

module.exports= router;