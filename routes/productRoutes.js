import express from "express";
import {
  listProducts,
  addProduct,
  updateStock,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/", listProducts);
router.post("/", addProduct);
router.put("/stock", updateStock);

export default router;
