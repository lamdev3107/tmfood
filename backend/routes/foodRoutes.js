const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");
const upload = require("../utils/fileUpload");

// Public routes
router.get("/", foodController.getAllFoods);
router.get("/:id", foodController.getFoodById);

// Thêm middleware upload (chỉ upload 1 ảnh)
router.post("/", upload.single("image"), foodController.createFood);
router.put("/:id", upload.single("image"), foodController.updateFood);
router.delete("/:id", foodController.deleteFood);

module.exports = router;
