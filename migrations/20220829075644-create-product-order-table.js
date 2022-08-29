'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_orders', {
      ProductOrder_id: {
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
        product_id:{
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