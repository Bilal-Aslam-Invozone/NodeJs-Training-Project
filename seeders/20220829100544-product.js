"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        id: 1,
        name: "Diet Coke",
        description: "In Can",
        imgPath: "1600652160_diet_coke.jpg",
        status: "Available",
        price: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Chicken",
        description: "Sample only ",
        imgPath: "1600652880_chicken.jpg",
        status: "Available",
        price: 170,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Lemon Iced Tea",
        description: "Sample",
        imgPath: "1600652520_lemon iced tea.jpg",
        status: "Available",
        price: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
