import express from "express";
import { salesReport, topProducts } from "../controllers/reportController.js";

const router = express.Router();
router.get("/sales", salesReport);
router.get("/top-products", topProducts);

export default router;
