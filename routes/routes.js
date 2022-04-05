const express = require('express');
const router = express.Router();
const createTable = require("./createTables");
const deleteTables = require("./deleteTables");
const createUsers = require("./createUsers")
const createContents = require("./createContents")
const createChapters = require("../routes/createChapters")
const createMetadata = require("../routes/createMetadata")
const createChaptersunlocked = require("../routes/createChaptersunlocked")
const getContentMetadata = require("../routes/getContentMetadata");
const getAccessableData = require("../routes/getAccessableData");
const getAllUsers = require("../routes/getAllUsers")
const dailypass = require("../routes/dailypass")

router.use('/create-tables',createTable);
router.use('/delete-tables',deleteTables);     
router.use('/create-users',createUsers);     
router.use('/create-contents',createContents);
router.use('/create-chapters',createChapters);
router.use('/create-metadata',createMetadata);
router.use('/create-chaptersunlocked',createChaptersunlocked);
router.use('/getmeta-data',getContentMetadata);
router.use('/user/accessable-data',getAccessableData);
router.use('/user/get-users',getAllUsers);
router.use('/daily-pass',dailypass);


module.exports= router;  