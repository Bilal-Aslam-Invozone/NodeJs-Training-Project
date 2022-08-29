'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_orders', [
      {
        
        ProductOrder_id: 1,
        order_product_id: 1,
        order_id: 1,
        product_id:1,
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductOrder_id: 2,
      order_product_id: 1,
      order_id: 1,
      product_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        ProductOrder_id: 3,
        order_product_id: 2,
        order_id: 2,
        product_id:3,
        createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_orders', null, {});
  }
};