'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_orders', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
      orderProductId: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
      orderId: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        productId:{
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
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_orders');
  }
};