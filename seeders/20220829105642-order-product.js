"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("order_products", [
      {
        id: 1,
        orderId: 1,
        productId: 1,
        quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        orderId: 2,
        productId: 2,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        orderId: 2,
        productId: 1,
        quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("order_products", null, {});
  },
};
