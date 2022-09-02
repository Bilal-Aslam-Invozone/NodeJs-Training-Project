const Sequelize = require("sequelize");
const sequelize = require("./sequelize_index").sequelize;
const db = require("./index.js"); //This is an instance of new Sequelize(...)

const tableName = "users";

const User = sequelize.define(
  "user",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userType: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      require: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  { tableName }
);

module.exports = User;
