const { Food, Category } = require("../models");

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.findAll({
      include: [{ model: Category, attributes: ["id", "name"] }],
    });
    res.status(200).json({
      success: true,
      message: "Get All Food Successfully!",
      data: foods,
    });
  } catch (error) {
    console.error("Get all foods error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id, {
      include: [{ model: Category, attributes: ["id", "name"] }],
    });

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({
      success: true,
      message: "Get food by ID successfully!",
      data: food,
    });
  } catch (error) {
    console.error("Get food by ID error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createFood = async (req, res) => {
  try {
    const { name, categoryId, price } = req.body;
    //Kiểm tra nếu có file gửi đi thì lấy đường dẫn file
    const image = req.file
      ? `${process.env.BASE_URL}/uploads/${req.file.filename}`
      : null;
    // Check if category exists
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const food = await Food.create({
      name,
      categoryId,
      price,
      image,
    });

    res.status(201).json({
      message: "Food created successfully",
      success: true,
      data: food,
    });
  } catch (error) {
    console.error("Create food error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateFood = async (req, res) => {
  try {
    const { name, categoryId, price } = req.body;
    const image = req.file
      ? `${process.env.BASE_URL}/uploads/${req.file.filename}`
      : null;
    const foodId = req.params.id;
    const food = await Food.findByPk(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    // If categoryId is provided, check if it exists
    if (categoryId) {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
    }

    await food.update({
      name,
      categoryId,
      price,
      image,
    });
    const updatedFood = await Food.findByPk(foodId);

    res.status(200).json({
      message: "Food updated successfully",
      success: true,
      data: updatedFood,
    });
  } catch (error) {
    console.error("Update food error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    const foodId = req.params.id;

    const food = await Food.findByPk(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    await food.destroy();

    res.status(200).json({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    console.error("Delete food error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
