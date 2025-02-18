const db = require("../models/queries");
const { insertNewItem } = require("../models/queries");

const newItemController = async (req, res) => {
  const categories = await db.getAllCategories();
  res.render("newItem", { categories: categories });
};

const newItemPostController = async (req, res) => {

  const { name, description, publisher, release, categories } = req.body;

  try {
    const itemId = await db.insertNewItem(name, description, publisher, release);

    if (categories && categories.length > 0) {
      const categoryValues = categories.map(categoryId => `(${itemId}, ${categoryId})`).join(',');
      const insertCategoriesQuery = `
        INSERT INTO items_categories (item_id, category_id)
        VALUES ${categoryValues}
      `;
      await db.executeQuery(insertCategoriesQuery);
    }
    res.redirect("/items");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating new item.');
  }
};

module.exports = {
  newItemController,
  newItemPostController
};