const { Table, TableOrder, FoodOrder, Food } = require("../models");

exports.getAllTables = async (req, res) => {
  try {
    const tables = await Table.findAll();
    res.status(200).json(tables);
  } catch (error) {
    console.error("Get all tables error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getTableById = async (req, res) => {
  try {
    const table = await Table.findByPk(req.params.id);

    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    res.status(200).json(table);
  } catch (error) {
    console.error("Get table by ID error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createTable = async (req, res) => {
  try {
    const { name } = req.body;

    const table = await Table.create({
      name,
      status: "trong",
    });

    res.status(201).json({
      success: true,
      message: "Table created successfully!",
      data: table,
    });
  } catch (error) {
    console.error("Create table error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateTable = async (req, res) => {
  try {
    const { name, status } = req.body;
    const tableId = req.params.id;

    const table = await Table.findByPk(tableId);
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    await table.update({
      name: name || table.name,
      status: status || table.status,
    });
    const updatedTable = await Table.findByPk(tableId, {
      raw: true,
    });

    res.status(200).json({
      message: "Table updated successfully",
      success: true,
      data: updatedTable,
    });
  } catch (error) {
    console.error("Update table error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.selectTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    const { status } = req.body;
    const table = await Table.findByPk(tableId, { raw: true });
    let tableList = await Table.findAll({ raw: true });

    if (table.status !== "empty") {
      return res.status(400).json({
        success: false,
        data: tableList,
        message:
          "Bàn đã được đặt, vui lòng chọn bàn khác hoặc chờ cho đến khi có bàn trống",
      });
    }
    tableList = await Table.findAll({ raw: true });

    await Table.update({ status }, { where: { id: tableId } });

    res.status(200).json({
      message: "Table updated successfully",
      success: true,
      data: tableList,
    });
  } catch (error) {
    console.error("Select table error:", error);
  }
};

exports.deleteTable = async (req, res) => {
  try {
    const tableId = req.params.id;

    const table = await Table.findByPk(tableId);
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    await table.destroy();

    res.status(200).json({ message: "Table deleted successfully" });
  } catch (error) {
    console.error("Delete table error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.resetTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    //Reset tất cả table về trạng thái "trống"
    await Table.update({ status: "empty" }, { where: {} });
    return res.status(200).json({
      success: true,
      message: "Table reset successfully",
    });
  } catch (error) {
    console.error("Reset table error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
