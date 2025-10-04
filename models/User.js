import db from "../config/db.js";

export const createUser = async (username, password, role) => {
  const [result] = await db.query(
    "INSERT INTO users (username, password, role) VALUES (?,?,?)",
    [username, password, role]
  );
  return result;
};

export const findUserByUsername = async (username) => {
  const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  return rows[0];
};
