'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_products', [
      {
        
        order_product_id: 1,
        order_id: 1,
        product_id: 1,
        quantity: 4,
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        order_product_id: 2,
        order_id: 2,
        product_id: 2,
        quantity: 3,
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      order_product_id: 3,
        order_id: 2,
        product_id: 1,
        quantity: 4,
        createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_products', null, {});
  }
};