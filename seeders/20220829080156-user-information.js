'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        userType: "Admin",
        email: 'bilal.aslam@invozone.com',
        password: 'bilal@1201', 
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      id: 2,
      userType: "Customer",
        email: 'hamza@invozone.com',
        password: 'hamza@1201', 
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      userType: "Customer",
        email: 'islam@invozone.com',
        password: 'islam@1201', 
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};