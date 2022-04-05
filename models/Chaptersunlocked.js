const Sequelize = require('sequelize');
const db = require("../config/database");
const Content = require('./Content');
const User = require('./User');

const Chaptersunlocked = db.define('Chapterunlocked',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId:{
        type: Sequelize.INTEGER,
        references: {
            model: User, 
            key: 'id'
          } 
    },
    contentId:{
        type: Sequelize.INTEGER,
        references: {
            model: Content, 
            key: 'id'
          } 
    },
    numberOfChaptersUnlocked:{
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'chaptersunlocked'
});

module.exports = Chaptersunlocked;