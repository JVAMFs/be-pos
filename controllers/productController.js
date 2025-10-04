import {
  getProducts,
  createProduct,
  updateProductStock,
} from "../models/Product.js";

export const listProducts = async (req, res) => {
  const products = await getProducts();
  res.json(products);
};

export const addProduct = async (req, res) => {
  const { name, price, stock, category } = req.body;
  await createProduct(name, price, stock, category);
  res.json({ message: "Product added successfully" });
};

export const updateStock = async (req, res) => {
  const { id, stock } = req.body;
  await updateProductStock(id, stock);
  res.json({ message: "Stock updated" });
};
