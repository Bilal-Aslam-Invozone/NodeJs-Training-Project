const Sequelize = require("sequelize");
const dbconfig = require("../config/config.js");

const sequelize = new Sequelize(
  "postgres://" +
    dbconfig.development.username +
    ":" +
    dbconfig.development.password +
    "@" +
    dbconfig.development.host +
    ":5432/" +
    dbconfig.development.database,
  {
    host: dbconfig.development.host,
    dialect: dbconfig.development.dialect,
  }
);

module.exports = { sequelize };
