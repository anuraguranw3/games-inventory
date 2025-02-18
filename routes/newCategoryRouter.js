const { Router } = require("express");
const newCategory = Router();
const { newCategoryController, newCategoryPostController } = require("../controllers/newCategoryController");

newCategory.get("/", newCategoryController);
newCategory.post("/", newCategoryPostController);

module.exports = newCategory;