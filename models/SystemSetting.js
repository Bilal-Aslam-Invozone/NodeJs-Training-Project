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
      contact: {
        type: DataTypes.TEXT,
        require:true

      },
      cover_img: {
        type: DataTypes.TEXT,
        require:true
        
      },
      about_content: {
        type: DataTypes.TEXT,
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
    
  }, {
    sequelize,
    modelName: 'SystemSetting',
    tableName:'system-settings'
  });
  return SystemSetting;
}