"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("orders", [
      {
        id: 1,
        userId: 1,
        name: "Bilal Aslam",
        email: "bilal.aslam@invozone.com",
        address: "Faisalabaad",
        mobile: "03107654985",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userId: 1,
        name: "Bilal Aslam",
        email: "bilal.aslam@invozone.com",
        address: "Faisalabaad",
        mobile: "03107654985",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        userId: 1,
        name: "Bilal Aslam",
        email: "bilal.aslam@invozone.com",
        address: "Faisalabaad",
        mobile: "03107654985",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};
