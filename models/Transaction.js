import db from "../config/db.js";

export const createTransaction = async (invoice, userId, total) => {
  const [result] = await db.query(
    "INSERT INTO transactions (invoice, user_id, total) VALUES (?,?,?)",
    [invoice, userId, total]
  );
  return result.insertId;
};

export const getTransactions = async () => {
  const [rows] = await db.query(
    "SELECT * FROM transactions ORDER BY created_at DESC"
  );
  return rows;
};
