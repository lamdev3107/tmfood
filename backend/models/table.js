const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Table = sequelize.define(
  "Tables",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("empty", "occupied", "waiting", "selected"),
      defaultValue: "empty",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    timestamps: true, // This enables automatic timestamp handling
  }
);

module.exports = Table;
