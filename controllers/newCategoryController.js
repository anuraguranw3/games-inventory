const db = require("../models/queries");

const newCategoryController = (req, res) => {
  res.render("newCategory");
};

const newCategoryPostController = (req, res) => {
  const { name, description } = req.body;
  db.insertNewCategory({ name, description });
  res.redirect("/categories");
};

module.exports = {
  newCategoryController,
  newCategoryPostController
};