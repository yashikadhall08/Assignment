const Sequelize = require('sequelize');
const db = require("../config/database");
const Chapters = require('./Chapter');

const Metadata = db.define('Metadata',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    chapterId:{
        type: Sequelize.INTEGER,
        references: {
            model: Chapters, 
            key: 'id'
          } 
    },textData:{
        type: Sequelize.STRING
    } 
}, {
    tableName: 'metadata'
});

module.exports = Metadata;