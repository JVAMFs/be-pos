import db from "../config/db.js";

export const salesReport = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT DATE(created_at) as date, SUM(total) as daily_sales
       FROM transactions
       GROUP BY DATE(created_at)
       ORDER BY date DESC`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const topProducts = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT p.name, SUM(ti.quantity) as total_sold
       FROM transaction_items ti
       JOIN products p ON ti.product_id = p.id
       GROUP BY p.name
       ORDER BY total_sold DESC
       LIMIT 5`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
