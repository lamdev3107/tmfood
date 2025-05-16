const express = require("express");
const router = express.Router();
const tableController = require("../controllers/tableController");

// Public routes
router.get("/", tableController.getAllTables);
router.get("/:id", tableController.getTableById);
router.put("/reset", tableController.resetTable);
router.post("/", tableController.createTable);
router.put("/:id", tableController.updateTable);
router.put("/:id/select", tableController.selectTable);

module.exports = router;
