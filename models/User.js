const Sequelize = require('sequelize');
const db = require("../config/database")

const User = db.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING
    },email:{
        type: Sequelize.STRING
    }
}, {
    tableName: 'users'
});

module.exports = User;