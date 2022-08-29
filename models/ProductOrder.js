'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
db.order_product = require('./OrderProduct');
db.product= require("./Product");
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductOrder.init({
    ProductOrder_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    order_product_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    order_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      product_id:{
        allowNull: false,
        type: DataTypes.INTEGER
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
  });
  return ProductOrder;
}