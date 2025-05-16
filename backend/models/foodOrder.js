const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FoodOrder = sequelize.define(
  "Foodorders",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    tableOrderId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    foodId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1,
    },
    totalPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // This enables automatic timestamp handling
  }
);

module.exports = FoodOrder;
