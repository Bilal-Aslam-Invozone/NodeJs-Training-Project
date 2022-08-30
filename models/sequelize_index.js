const Sequelize = require('sequelize');
const dbconfig=require('../config/config.js');

const sequelize = new Sequelize('postgres://' + dbconfig.development.username + ":" +     dbconfig.development.password + "@" + dbconfig.development.host + ":5432/" + dbconfig.development.database, {
host: dbconfig.development.host,
dialect: dbconfig.development.dialect,
// pool: {
//     min: 0,
//     max: 5,
//     idle: 1000
//      }
});

 module.exports={sequelize};