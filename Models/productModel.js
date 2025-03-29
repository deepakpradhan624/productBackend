const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const productModel = sequelize.define(
  "productDetails",
  {
    Product_SKU: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BatchNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    InwardQty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);
module.exports = { productModel };
