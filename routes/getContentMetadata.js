const express = require('express');
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");



router.get('/:contentId',async (req,res) => {
    let contentId = req.params.contentId;

    try {
        let contentMetadata = await db.query(`
        SELECT * FROM contents c 
        JOIN chapters ch ON ch."contentId" = :content_id 
        JOIN metadata md ON md."chapterId" = ch.id;`,{
            replacements:{
                content_id: contentId
            }
        })
        res.status(200).send(contentMetadata);
        
    } catch (error) {
        res.status(404).send(error)
    }
    
});     
 

module.exports= router;