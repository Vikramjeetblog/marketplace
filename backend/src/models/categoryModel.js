const db = require("../config/db");

/*
=========================================
Get All Categories
=========================================
*/
const getAllCategories =
  async () => {
    const [rows] =
      await db.execute(`
        SELECT *
        FROM categories
        ORDER BY sort_order ASC,
                 name ASC
      `);

    return rows;
  };

/*
=========================================
Get Active Categories
=========================================
*/
const getActiveCategories =
  async () => {
    const [rows] =
      await db.execute(`
        SELECT *
        FROM categories
        WHERE is_active = TRUE
        ORDER BY sort_order ASC,
                 name ASC
      `);

    return rows;
  };

/*
=========================================
Get Category By Id
=========================================
*/
const getCategoryById =
  async (id) => {
    const [rows] =
      await db.execute(
        `
        SELECT *
        FROM categories
        WHERE id = ?
        LIMIT 1
        `,
        [id]
      );

    return rows[0];
  };

/*
=========================================
Create Category
=========================================
*/
const createCategory =
  async ({
    name,
    slug,
    image_url,
    sort_order,
  }) => {
    const [result] =
      await db.execute(
        `
        INSERT INTO categories
        (
          name,
          slug,
          image_url,
          sort_order
        )
        VALUES (?, ?, ?, ?)
        `,
        [
          name,
          slug,
          image_url,
          sort_order,
        ]
      );

    return result.insertId;
  };

/*
=========================================
Update Category
=========================================
*/
const updateCategory =
  async (
    id,
    data
  ) => {
    const {
      name,
      slug,
      image_url,
      sort_order,
    } = data;

    const [result] =
      await db.execute(
        `
        UPDATE categories
        SET
          name = ?,
          slug = ?,
          image_url = ?,
          sort_order = ?
        WHERE id = ?
        `,
        [
          name,
          slug,
          image_url,
          sort_order,
          id,
        ]
      );

    return result;
  };

/*
=========================================
Update Category Status
=========================================
*/
const updateCategoryStatus =
  async (
    id,
    is_active
  ) => {
    const [result] =
      await db.execute(
        `
        UPDATE categories
        SET is_active = ?
        WHERE id = ?
        `,
        [
          is_active,
          id,
        ]
      );

    return result;
  };

module.exports = {
  getAllCategories,
  getActiveCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  updateCategoryStatus,
};