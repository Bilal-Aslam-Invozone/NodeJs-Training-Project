'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
db.order_product = require('./OrderProduct');
module.exports = (sequelize, DataTypes) => {
  class OpRelation extends Model {
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
  OpRelation.init({
    OpRelation_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    order_product_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    order_id: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    modelName: 'OpRelation'
  });
  return OpRelation;
}