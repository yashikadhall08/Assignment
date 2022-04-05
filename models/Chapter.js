const Sequelize = require('sequelize');
const db = require("../config/database");
const Content = require('./Content');


const Chapters = db.define('Chapter',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    contentId:{
        type: Sequelize.INTEGER,
        references: {
            model: Content, 
            key: 'id'
          } 
    },seqNumber:{
        type: Sequelize.INTEGER
    },title:{
        type: Sequelize.STRING
    }
}, {
    tableName: 'chapters' 
});


Chapters.belongsTo(Content,{foreignKey:'contentId'});
Content.hasMany(Chapters,{foreignKey:'contentId'});

module.exports = Chapters;