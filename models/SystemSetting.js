'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SystemSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SystemSetting.init({
    system_setting_id: {
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
      cover_img: {
        type: Sequelize.TEXT,
        require:true
        
      },
      about_content: {
        type: Sequelize.TEXT,
        require:true
        
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
    modelName: 'SystemSetting',
    tableName:'system-settings'
  });
  return SystemSetting;
}