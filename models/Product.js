import db from "../config/db.js";

export const getProducts = async () => {
  const [rows] = await db.query("SELECT * FROM products");
  return rows;
};

export const createProduct = async (name, price, stock, category) => {
  const [result] = await db.query(
    "INSERT INTO products (name, price, stock, category) VALUES (?,?,?,?)",
    [name, price, stock, category]
  );
  return result;
};

export const updateProductStock = async (id, stock) => {
  await db.query("UPDATE products SET stock = ? WHERE id = ?", [stock, id]);
};
