'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('carts', [
      {
        card_id: 1,
        user_id: 1,
        product_id: 1,
        quantity: 2,
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      card_id: 2,
      product_id: 2,
      quantity: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      card_id: 3,
        user_id: 3,
        product_id: 3,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('carts', null, {});
  }
};