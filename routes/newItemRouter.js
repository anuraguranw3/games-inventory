const { Router } = require("express");
const newItemRouter = Router();
const { newItemController, newItemPostController } = require("../controllers/newItemController");

newItemRouter.get("/", newItemController);
newItemRouter.post("/", newItemPostController)

module.exports = newItemRouter;