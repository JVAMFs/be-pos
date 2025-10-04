import { createTransaction, getTransactions } from "../models/Transaction.js";
import { createTransactionItem } from "../models/TransactionItem.js";
import { updateProductStock } from "../models/Product.js";

export const newTransaction = async (req, res) => {
  try {
    const { invoice, userId, total, items } = req.body;

    const transactionId = await createTransaction(invoice, userId, total);

    for (let item of items) {
      await createTransactionItem(
        transactionId,
        item.productId,
        item.quantity,
        item.price
      );
      await updateProductStock(item.productId, item.newStock);
    }

    res.json({ message: "Transaction saved", transactionId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listTransactions = async (req, res) => {
  const transactions = await getTransactions();
  res.json(transactions);
};
