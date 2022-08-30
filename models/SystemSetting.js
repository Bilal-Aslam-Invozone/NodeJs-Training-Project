'use strict'
const Sequelize = require('sequelize');

const sequelize=require('./sequelize_index').sequelize;
const instanceMethods = {
    toJSON() {
        const values = Object.assign({}, this.get());

        return values;
    },
};

const SystemSetting = sequelize.define('system_settings', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
  contact: {
    type: Sequelize.TEXT,
    require:true

  },
  coverImg: {
    type: Sequelize.TEXT,
    require:true
    
  },
  aboutContent: {
    type: Sequelize.TEXT,
    require:true
    
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, { instanceMethods });

module.exports = SystemSetting;






