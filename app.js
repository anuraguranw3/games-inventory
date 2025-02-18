const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const itemsRouter = require("./routes/itemsRouter");
const newItemRouter = require("./routes/newItemRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const newCategoryRouter = require("./routes/newCategoryRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", indexRouter);
app.use("/items", itemsRouter);
app.use("/new-item", newItemRouter);
app.use("/categories", categoriesRouter);
app.use("/new-category", newCategoryRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
