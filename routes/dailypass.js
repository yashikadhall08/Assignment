const express = require('express');
const router = express.Router();
const db = require("../config/database");
const ChaptersUnlocked = require("../models/Chaptersunlocked")

router.get('/:userId/:contentId',async (req,res) => {
    let userId = req.params.userId;
    let contentId = req.params.contentId;

    try {
        
        let dailyPassData = await db.query(`
        SELECT * FROM chaptersunlocked cu
        WHERE cu."contentId" = :contentId
        AND cu."userId"= :userId;`,{
            replacements:{
                userId: userId,
                contentId: contentId
            }
        });
    
        dailyPassData  = dailyPassData[0][0];
    
        if(dailyPassData  === undefined ||dailyPassData.length === 0){
            await ChaptersUnlocked.create({
                userId,
                contentId,
                numberOfChaptersUnlocked: 4
            });
    
        }else{
            let currNumberOfChapter = allData.numberOfChaptersUnlocked;
            let updatedNumberOfChapters = currNumberOfChapter + 1;
    
            await db.query(`
            UPDATE chaptersunlocked cu SET "numberOfChaptersUnlocked" = :updatedNumberOfChapters
            WHERE cu."contentId" = :contentId
            AND cu."userId"= :userId;`,{
                replacements:{
                    updatedNumberOfChapters: updatedNumberOfChapters,
                    userId: userId,
                    contentId: contentId
                }
            });
        }
    
        res.sendStatus(200); 
           
    } catch (error) {
        res.status(404).send("The content or user does not exist")
    }

});     


module.exports= router;
 