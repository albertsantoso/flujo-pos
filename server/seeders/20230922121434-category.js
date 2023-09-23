'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('categories', [
      {
        category_name: "Breakfast"
      },
      {
        category_name: "Burgers"
      },
      {
        category_name: "Chicken & Fish Sandwiches"
      },
      {
        category_name: "McNuggets®"
      },
      {
        category_name: "Fries® & Sides"
      },
      {
        category_name: "Happy Meal"
      },
      {
        category_name: "Coffees"
      },
      {
        category_name: "Beverages"
      },
    ])

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
