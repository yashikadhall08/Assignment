const express = require('express');
const router = express.Router();
const db = require("../config/database");

router.get('/:userId',async (req,res) => {
    let userId = req.params.userId;

    try {
        
        let data = await db.query(`SELECT * from users u 
        JOIN chaptersunlocked cu ON cu."userId" = :user_id;
        `,{
            replacements:{
                user_id: userId
            }
        })
    
        let allContentIdsSet = new Set();
        data[0].map((item) =>{
            allContentIdsSet.add(item.contentId);
        })
        let allContentIds = [...allContentIdsSet]
    
        let contentsWithChaptersUnlocked = await db.query(`
            SELECT cu."userId", cu."contentId", cu."numberOfChaptersUnlocked" 
            FROM chaptersunlocked cu WHERE cu."contentId" IN (:allContentIds); 
        `,{
            replacements:{
                user_id: userId,
                allContentIds: allContentIds
            }
        })
    
        let allUnlockedChapters = await Promise.all(contentsWithChaptersUnlocked[0].map(async (item) =>{
            return await db.query(`SELECT * from chapters ch WHERE ch."contentId" = :contentId AND ch."seqNumber" <= :unlockedNumber`,{
                replacements: {
                    contentId : item.contentId,
                    unlockedNumber : item.numberOfChaptersUnlocked
                }
            }).then(async (data) =>{
    
                return Promise.all(data[0].map(async (item) =>{
                     return await db.query(`SELECT * from metadata md WHERE md."chapterId" = :chapterId`,{
                        replacements: {
                            contentId : item.contentId,
                            chapterId: item.id,
                        }
                    }).then((data) =>{
                       return (data[0])
                    })
                }))
            })
        })).then((ans) =>{
            return ans;
        })
    
        let totalChaptersAndUnlockedChapters = await Promise.all(contentsWithChaptersUnlocked[0].map(async(item) =>{
            let contentId = item.contentId;
            let totalChapters = await db.query(`SELECT c."numberOfChapters" FROM contents c WHERE c.id = :contentId`,{
                replacements:{
                    contentId: contentId
                }
            })
            totalChapters = totalChapters[0][0].numberOfChapters
            return {...item, totalChapters};
        
        })).then((data) =>{
            return data;
        })
    
        let accessableData = [];
        accessableData.push(totalChaptersAndUnlockedChapters);
        accessableData.push(allUnlockedChapters);
    
        
        res.status(200).send(accessableData);
    } catch (error) {
        res.status(404).send("Please hit the dailypass for current user and content id to gain access")
    }
});     
 
module.exports = router;