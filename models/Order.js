'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
db.order_product = require('./OrderProduct');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      db.Order.belongToMany(db.order_product,{through:"OpRelation"})
    }
  }
  Order.init({
    order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      email:{
        type: Sequelize.STRING,
        require:true,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        require:true

      },
      mobile: {
        type: Sequelize.STRING,
        require:true,
        allowNull: false,
      },
      status: {
        type: Sequelize.tinyint(1),
        default:0,
        allowNull:false
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
    modelName: 'Order',
    tableName:'orders'
  });
  return Order;
}