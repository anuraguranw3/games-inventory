const db = require("../models/queries");

const categoriesController = async (req, res) => {
  const categories = await db.getAllCategories();
  res.render("categories", { categories: categories });
};

module.exports = {
  categoriesController,
};