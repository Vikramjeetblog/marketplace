const express = require("express");

const {
  getCategories,
  getPublicCategories,
  getCategory,
  createNewCategory,
  editCategory,
  activateCategory,
  deactivateCategory,
} = require(
  "../controllers/categoryContorller"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

const {
  adminOnly,
} = require(
  "../middleware/adminMiddleware"
);

const router = express.Router();

/*
=========================================
Public Routes
=========================================
*/

// Active categories for frontend
router.get(
  "/active",
  getPublicCategories
);

// Category details
router.get(
  "/:id",
  getCategory
);

/*
=========================================
Admin Routes
=========================================
*/

// All categories
router.get(
  "/",
  protect,
  adminOnly,
  getCategories
);

// Create category
router.post(
  "/",
  protect,
  adminOnly,
  createNewCategory
);

// Update category
router.put(
  "/:id",
  protect,
  adminOnly,
  editCategory
);

// Activate category
router.patch(
  "/:id/activate",
  protect,
  adminOnly,
  activateCategory
);

// Deactivate category
router.patch(
  "/:id/deactivate",
  protect,
  adminOnly,
  deactivateCategory
);

module.exports = router;