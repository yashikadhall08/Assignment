const Sequelize = require('sequelize');
const db = require("../config/database")

const Content = db.define('Content',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type: Sequelize.STRING
    },
    numberOfChapters:{
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'contents'
});

module.exports = Content;