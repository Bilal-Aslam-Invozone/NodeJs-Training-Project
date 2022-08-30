'use strict'
const Sequelize = require('sequelize');

const sequelize=require('./sequelize_index').sequelize;
const instanceMethods = {
    toJSON() {
        const values = Object.assign({}, this.get());

        return values;
    },
};

const Product = sequelize.define('products', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  cardId: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imgPath: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    default:"available",
    allowNull:false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }

}, { instanceMethods });

module.exports = Product;











