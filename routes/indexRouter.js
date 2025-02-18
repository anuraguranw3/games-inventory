const { Router } = require("express");
const indexRouter = Router();
const { indexGetController } = require("../controllers/indexController");

indexRouter.get("/", indexGetController);

module.exports = indexRouter;