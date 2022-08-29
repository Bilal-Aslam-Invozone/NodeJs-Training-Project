'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [




      {
        order_id: 1,
        user_id: 1,
        name: "Bilal Aslam",
        email: "bilal.aslam@invozone.com",
        address: "Faisalabaad",
        mobile: "03107654985",
        status: true,
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      order_id: 2,
        user_id: 1,
        name: "Bilal Aslam",
        email: "bilal.aslam@invozone.com",
        address: "Faisalabaad",
        mobile: "03107654985",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      order_id: 3,
        user_id: 1,
        name: "Bilal Aslam",
        email: "bilal.aslam@invozone.com",
        address: "Faisalabaad",
        mobile: "03107654985",
        status: true,
        createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};