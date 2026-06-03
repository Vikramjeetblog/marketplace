const db = require("../config/db");

/*
=========================================
Create Sell Request
=========================================
*/
const createSellRequest = async ({
  request_number,
  user_id,
  category_id,
  title,
  brand,
  manufacturer,
  condition_grade,
  expected_price,
  description,
}) => {
  const [result] = await db.execute(
    `
    INSERT INTO sell_requests (
      request_number,
      user_id,
      category_id,
      title,
      brand,
      manufacturer,
      condition_grade,
      expected_price,
      description
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      request_number,
      user_id,
      category_id,
      title,
      brand,
      manufacturer,
      condition_grade,
      expected_price,
      description,
    ]
  );

  return result.insertId;
};

/*
=========================================
Get Sell Request By ID
=========================================
*/
const findSellRequestById = async (id) => {
  const [rows] = await db.execute(
    `
    SELECT *
    FROM sell_requests
    WHERE id = ?
    LIMIT 1
    `,
    [id]
  );

  return rows[0];
};

/*
=========================================
Get Sell Request By Request Number
=========================================
*/
const findSellRequestByRequestNumber = async (
  requestNumber
) => {
  const [rows] = await db.execute(
    `
    SELECT *
    FROM sell_requests
    WHERE request_number = ?
    LIMIT 1
    `,
    [requestNumber]
  );

  return rows[0];
};

/*
=========================================
Get User Sell Requests
=========================================
*/
const getUserSellRequests = async (
  userId
) => {
  const [rows] = await db.execute(
    `
    SELECT
      sr.*,
      c.name AS category_name
    FROM sell_requests sr
    LEFT JOIN categories c
      ON sr.category_id = c.id
    WHERE sr.user_id = ?
    ORDER BY sr.created_at DESC
    `,
    [userId]
  );

  return rows;
};

/*
=========================================
Get All Sell Requests (Admin)
=========================================
*/
const getAllSellRequests = async () => {
  const [rows] = await db.execute(
    `
    SELECT
      sr.*,
      u.full_name,
      u.phone,
      c.name AS category_name
    FROM sell_requests sr
    LEFT JOIN users u
      ON sr.user_id = u.id
    LEFT JOIN categories c
      ON sr.category_id = c.id
    ORDER BY sr.created_at DESC
    `
  );

  return rows;
};

/*
=========================================
Update Sell Request Status
=========================================
*/
const updateSellRequestStatus = async (
  id,
  status
) => {
  const [result] = await db.execute(
    `
    UPDATE sell_requests
    SET status = ?
    WHERE id = ?
    `,
    [status, id]
  );

  return result;
};

module.exports = {
  createSellRequest,
  findSellRequestById,
  findSellRequestByRequestNumber,
  getUserSellRequests,
  getAllSellRequests,
  updateSellRequestStatus,
};