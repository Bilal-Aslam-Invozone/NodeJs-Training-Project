'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
db.order = require('./Order');
db.cart= require("./Cart");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      db.User.hasMany(db.order,{forgenKey:"user_id"})
      db.User.hasMany(db.cart,{forgenKey:"user_id"})
    }
  }
  User.init({
    user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        require:true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
}