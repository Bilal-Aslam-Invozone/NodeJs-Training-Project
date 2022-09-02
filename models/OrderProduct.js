"use strict";
const Sequelize = require("sequelize");

const sequelize = require("./sequelize_index").sequelize;
const instanceMethods = {
  toJSON() {
    const values = Object.assign({}, this.get());

    return values;
  },
};

const OrderProduct = sequelize.define(
  "order_products",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    orderId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    productId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER,
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
  { instanceMethods }
);

module.exports = OrderProduct;
