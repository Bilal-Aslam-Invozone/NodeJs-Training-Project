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
    // static associate(models) {
    //   // define association here
    //   db.Order.belongToMany(db.order_product,{through:"OrderProduct"})
    // }
  }
  Order.init({
    order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
      },
      email:{
        type: DataTypes.STRING,
        require:true,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        require:true

      },
      mobile: {
        type: DataTypes.STRING,
        require:true,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        default:true,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    
  }, {
    sequelize,
    modelName: 'Order',
    tableName:'orders'
  });
  return Order;
}