const db = require("../models/queries");

const itemsController = async (req, res) => {
  const items = await db.getAllItemsWithCategories();
  res.render("items", { items: items });
};

module.exports = {
  itemsController,
};