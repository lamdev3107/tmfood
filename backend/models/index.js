const sequelize = require("../config/database");
const User = require("./user");
const Table = require("./table");
const Category = require("./category");
const Food = require("./food");
const FoodOrder = require("./foodOrder");
const TableOrder = require("./tableOrder");

// Define relationships
Food.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Food, { foreignKey: "categoryId" });

// Fix the relationship between Food and FoodOrder
Food.hasMany(FoodOrder, { foreignKey: "foodId" });
FoodOrder.belongsTo(Food, { foreignKey: "foodId" });

// Define TableOrder relationships
TableOrder.hasMany(FoodOrder, { foreignKey: "tableOrderId" }); // Fixed casing
FoodOrder.belongsTo(TableOrder, { foreignKey: "tableOrderId" });

TableOrder.belongsTo(Table, { foreignKey: "tableId" }); // Fixed casing
Table.hasMany(TableOrder, { foreignKey: "tableId" });

module.exports = {
  sequelize,
  User,
  Table,
  Category,
  Food,
  FoodOrder,
  TableOrder,
};
