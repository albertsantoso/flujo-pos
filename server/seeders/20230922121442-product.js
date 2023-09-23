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
    await queryInterface.bulkInsert('products', [
      {
        product_name: "Bacon, Egg & Cheese Biscuit",
        product_description: "Warm, buttermilk biscuit brushed with real butter.",
        product_image: "/initial/BaconEggCheeseBis.jpg",
        product_price: 32000,
        categoryId: 1
      },
      {
        product_name: "Egg McMuffin®",
        product_description: "Freshly cracked Grade A egg placed on a toasted English Muffin topped with real butter, lean Canadian bacon, and melty American cheese.",
        product_image: "/initial/EggMcMuffin.jpg",
        product_price: 30000,
        categoryId: 1
      },
      {
        product_name: "Sausage McMuffin®",
        product_description: "Warm, freshly toasted English muffin, topped with a savory hot sausage patty and a slice of melty American cheese.",
        product_image: "/initial/SausageMcMuffin.jpg",
        product_price: 28000,
        categoryId: 1
      },
      {
        product_name: "Big Breakfast®",
        product_description: "Warm biscuit, fluffy scrambled eggs, savory McDonald's sausage and crispy golden Hash Browns.",
        product_image: "/initial/BigBreakfast.jpg",
        product_price: 46000,
        categoryId: 1
      },
      {
        product_name: "Sausage Burrito",
        product_description: "Fluffy scrambled egg, pork sausage, melty cheese, green chiles, and onion!",
        product_image: "/initial/SausageBurrito.jpg",
        product_price: 36000,
        categoryId: 1
      },
      {
        product_name: "Bacon, Egg & Cheese Biscuit Meal",
        product_description: "Bacon Egg & Cheese Biscuit meal, hash browns and a small McCafé® Premium Roast Coffee.",
        product_image: "/initial/BaconEggCh.jpg",
        product_price: 44000,
        categoryId: 1
      },
      // ==== //
      {
        product_name: "Big Mac®",
        product_description: " 100% beef burger with a taste like no other.",
        product_image: "/initial/BigMac.jpg",
        product_price: 40000,
        categoryId: 2
      },
      {
        product_name: "Double Quarter Pounder® w/ Cheese",
        product_description: "100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order.",
        product_image: "/initial/DoubleQuarterPou.jpg",
        product_price: 42000,
        categoryId: 2
      },
      {
        product_name: "Quarter Pounder® with Cheese",
        product_description: "Each Quarter Pounder with Cheese burger features a ¼ lb.* of 100% fresh beef hot.",
        product_image: "/initial/QuarterPounde.jpg",
        product_price: 35000,
        categoryId: 2
      },
      {
        product_name: "Double Cheeseburger",
        product_description: "Features two 100% pure all beef patties seasoned with just a pinch of salt and pepper.",
        product_image: "/initial/DoubleCheeseburge.jpg",
        product_price: 44000,
        categoryId: 2
      },
      {
        product_name: "Hamburger: The Classic",
        product_description: "The Classic's Hamburger starts with a 100% pure beef patty seasoned with just a pinch of salt and pepper.",
        product_image: "/initial/Hamburger.jpg",
        product_price: 34000,
        categoryId: 2
      },
      {
        product_name: "McDouble®",
        product_description: "Burger stacks two 100% pure beef patties seasoned with just a pinch of salt and pepper. ",
        product_image: "/initial/McDouble.jpg",
        product_price: 38000,
        categoryId: 2
      },
      // ==== //
      {
        product_name: "McCrispy™",
        product_description: "McCrispy™ is a southern-style fried chicken sandwich that's crispy, juicy and tender perfection.",
        product_image: "/initial/CrispyChickenSand.jpg",
        product_price: 40000,
        categoryId: 3
      },
      {
        product_name: "Deluxe McCrispy™",
        product_description: "Deluxe McCrispy features a crispy chicken fillet with shredded lettuce, Roma tomatoes and mayo.",
        product_image: "/initial/DeluxeCrispyChick.jpg",
        product_price: 44000,
        categoryId: 3
      },
      {
        product_name: "Spicy McCrispy™",
        product_description: "Crispy, juicy, tender and hot.",
        product_image: "/initial/SpicyCrispyChicke.jpg",
        product_price: 38000,
        categoryId: 3
      },
      {
        product_name: "Filet-O-Fish®",
        product_description: "A classic McDonald's fish sandwich!",
        product_image: "/initial/Filet-O-Fish.jpg",
        product_price: 36000,
        categoryId: 3
      },
      {
        product_name: "Spicy Deluxe McCrispy™",
        product_description: "Roma tomatoes and Spicy Pepper Sauce kicks crispy, juicy and tender up to the highest level.",
        product_image: "/initial/DeluxeSpicyCrispy.jpg",
        product_price: 50000,
        categoryId: 3
      },
      {
        product_name: "McChicken®",
        product_description: "It’s a classic for a reason. ",
        product_image: "/initial/McChicken.jpg",
        product_price: 35000,
        categoryId: 3
      },
    ]);
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
