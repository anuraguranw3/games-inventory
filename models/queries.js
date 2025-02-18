const pool = require("./pool");

const getAllItems = async () => {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
};

const insertNewItem = async (name, description, publisher, release) => {
  const query = `
  INSERT INTO items (name, description, publisher, release)
  VALUES ($1, $2, $3, $4)
  RETURNING id
`;
  const values = [name, description, publisher, release];
  const result = await pool.query(query, values);
  return result.rows[0].id;
};

const getAllItemsWithCategories = async () => {
  const query = `
    SELECT 
      items.*, 
      json_agg(json_build_object('name', categories.name, 'description', categories.description)) AS categories
    FROM items
    JOIN items_categories ON items.id = items_categories.item_id
    JOIN categories ON items_categories.category_id = categories.id
    GROUP BY items.id
  `;
  const { rows } = await pool.query(query);
  return rows;
};

const getAllCategories = async () => {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
};

const insertNewCategory = async (category) => {
  const { name, description } = category;
  await pool.query("INSERT INTO categories (name, description) VALUES ($1, $2)", [name, description]);
};

// Function to execute custom SQL queries
const executeQuery = async (query) => {
  return await pool.query(query);
};

module.exports = {
  getAllItems,
  insertNewItem,
  getAllCategories,
  insertNewCategory,
  executeQuery,
  getAllItemsWithCategories
};