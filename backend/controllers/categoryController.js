const { Category, Food } = require("../models");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: {
        model: Food,
        order: [["createdAt", "DESC"]],
      },
    });
    if (categories)
      res.status(200).json({
        success: true,
        message: "All categories retrieved successfully",
        data: categories,
      });
  } catch (error) {
    console.error("Get all categories error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: {
        model: Food,
        order: [["createdAt", "DESC"]],
      },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category retrieved successfully",
      data: category,
    });
  } catch (error) {
    console.error("Get category by ID error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getCategoryFoods = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: {
        model: Food,
        order: [["createdAt", "DESC"]],
      },
    });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      success: true,
      message: "Category foods retrieved successfully",
      data: category.Foods,
    });
  } catch (error) {
    console.error("Get category foods error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
