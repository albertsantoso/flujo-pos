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
        password: "abc123",
        status: "active",
        role: "Admin"
      },
      {
        username: "rafel_tp",
        email: "rafaeltp@example.com",
        password: "abc123",
        status: "active",
        role: "Admin"
      },
      {
        username: "aryo_stm",
        email: "aryostm@example.com",
        password: "abc123",
        status: "active",
        role: "Admin"
      },
      {
        username: "alvin",
        email: "alvin@example.com",
        password: "abc123",
        status: "active",
        role: "cashier"
      },
      {
        username: "joe",
        email: "joe@example.com",
        password: "abc123",
        status: "disabled",
        role: "cashier"
      },
      {
        username: "rico",
        email: "rico@example.com",
        password: "abc123",
        status: "disabled",
        role: "cashier"
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
