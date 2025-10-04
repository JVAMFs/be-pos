import express from "express";
import {
  newTransaction,
  listTransactions,
} from "../controllers/transactionController.js";

const router = express.Router();
router.post("/", newTransaction);
router.get("/", listTransactions);

export default router;
