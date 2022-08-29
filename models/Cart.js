'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
db.product= require("./Product");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    //   db.Cart.belongsTo(db.product,{foreignkey:"card_id"})
      
    // }

    // static associate(models) {
    //   // define association here
    //   db.Cart.belongsTo(db.Product, {
    //     foreignKey: "card_id",
    //     constraints: false,
    //   });
    // }
  
  }
  Cart.init({
    card_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      quantity: {
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
    modelName: 'Cart',
    tableName:'carts',
  });
  return Cart;
}