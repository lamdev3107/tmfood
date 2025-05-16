const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TableOrder = sequelize.define(
  "TableOrders",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    tableId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    timestamps: true, // This enables automatic timestamp handling
  }
);

module.exports = TableOrder;
