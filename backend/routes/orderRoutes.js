const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Protected routes
router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.get("/table/:tableId", orderController.getOrderByTableId);
router.get("/customer/:customerPhone", orderController.getOrderOfCustomer);
router.put("/:id", orderController.completeOrder);
// router.delete("/:id", orderController.deleteOrder);

module.exports = router;
