"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("productDetails", {
      Product_SKU: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      BatchNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      ExpiryDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      InwardQty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("productDetails");
  },
};
