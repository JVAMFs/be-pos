import db from "../config/db.js";

export const createTransactionItem = async (
  transactionId,
  productId,
  qty,
  price
) => {
  await db.query(
    "INSERT INTO transaction_items (transaction_id, product_id, quantity, price) VALUES (?,?,?,?)",
    [transactionId, productId, qty, price]
  );
};
