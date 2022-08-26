'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('system_settings', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('system_settings');
  }
};