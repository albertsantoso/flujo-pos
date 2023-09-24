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
    await queryInterface.bulkInsert('users', [
      {
        username: "john_doe",
        email: "john.doe@example.com",
        password: "password123",
        status: "active",
        role: "Admin"
      },
      {
        username: "susan_smith",
        email: "susan.smith@example.com",
        password: "securepass456",
        status: "active",
        role: "Cashier"
      },
      {
        username: "alice_jones",
        email: "alice.jones@example.com",
        password: "secretword789",
        status: "disabled",
        role: "Cashier"
      },
      {
        username: "albert_santoso",
        email: "albert@example.com",
        password: "$2b$10$avjF7uoUqlvP6KYObWSRJOw4xtWpimzkYR75Ea9SaKpEccdE9L9Re",
        status: "active",
        role: "Cashier"
      },
      {
        username: "rafael_tp",
        email: "rafaeltp@example.com",
        password: "$2b$10$avjF7uoUqlvP6KYObWSRJOw4xtWpimzkYR75Ea9SaKpEccdE9L9Re",
        status: "active",
        role: "Cashier"
      },
      {
        username: "aryo_stm",
        email: "aryostm@example.com",
        password: "$2b$10$avjF7uoUqlvP6KYObWSRJOw4xtWpimzkYR75Ea9SaKpEccdE9L9Re",
        status: "active",
        role: "Cashier"
      },
      {
        username: "Admin1",
        email: "alvin@example.com",
        password: "$2b$10$avjF7uoUqlvP6KYObWSRJOw4xtWpimzkYR75Ea9SaKpEccdE9L9Re",
        status: "active",
        role: "Admin"
      },
      {
        username: "Admin2",
        email: "joe@example.com",
        password: "$2b$10$avjF7uoUqlvP6KYObWSRJOw4xtWpimzkYR75Ea9SaKpEccdE9L9Re",
        status: "disabled",
        role: "Admin"
      },
      {
        username: "Admin3",
        email: "rico@example.com",
        password: "$2b$10$avjF7uoUqlvP6KYObWSRJOw4xtWpimzkYR75Ea9SaKpEccdE9L9Re",
        status: "disabled",
        role: "Admin"
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
