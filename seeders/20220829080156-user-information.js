'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        email: 'bilal.aslam@invozone.com',
        password: 'bilal@1201', 
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      user_id: 2,
        email: 'hamza@invozone.com',
        password: 'hamza@1201', 
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
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