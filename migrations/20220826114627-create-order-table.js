'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
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
      address: {
        type: Sequelize.STRING,
        require:true

      },
      mobile: {
        type: Sequelize.STRING,
        require:true,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        default:false,
        allowNull:false,
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
    await queryInterface.dropTable('orders');
  }
};