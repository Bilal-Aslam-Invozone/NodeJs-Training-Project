'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [

       


      {
        product_id: 1,
        card_id:1,
        name: "Diet Coke",
        description: "In Can",
        img_path: "1600652160_diet_coke.jpg",
        status: "Available",
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      product_id: 2,
        card_id:2,
        name: "Chicken",
        description: "Sample only ",
        img_path: "1600652880_chicken.jpg",
        status: "Available",
        price: 170,
        createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_id: 3,
        card_id:3,
        name: "Lemon Iced Tea",
        description: "Sample",
        img_path: "1600652520_lemon iced tea.jpg",
        status: "Available",
        price: 60,
        createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};