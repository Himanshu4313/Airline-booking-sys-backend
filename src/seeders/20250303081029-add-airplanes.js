"use strict";
const {Op, or} = require("sequelize");
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
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "AirbusA300",
          capacity: 247,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber: "AirbusA310",
          capacity: 250,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber: "Boeing717",
          capacity: 117,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
     
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes",  {
       [Op.or] : [{modelNumber:"AirbusA300"} ,{modelNumber:"AirbusA310" }, {modelNumber: "Boeing717"}]
    });
  },
};
