const db = require("../config/db");

const findUserByPhone = async (phone) => {
  const [rows] = await db.execute(
    "SELECT * FROM users WHERE phone = ?",
    [phone]
  );

  return rows[0];
};

const createUser = async ({
  full_name,
  phone,
  email,
}) => {
  const [result] = await db.execute(
    `
    INSERT INTO users
    (full_name, phone, email)
    VALUES (?, ?, ?)
    `,
    [full_name, phone, email]
  );

  return result.insertId;
};

const findUserById = async (id) => {
  const [rows] = await db.execute(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );

  return rows[0];
};

module.exports = {
  findUserByPhone,
  createUser,
  findUserById,
};