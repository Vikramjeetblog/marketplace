const express = require("express");

const {
  submitSellRequest,
  getMySellRequests,
  getSellRequest,
  getAdminSellRequests,
  changeSellRequestStatus,
} = require("../controllers/sellController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

/*
=========================================
Seller Routes
=========================================
*/

// Create Sell Request
router.post(
  "/",
  protect,
  submitSellRequest
);

// Logged In User Requests
router.get(
  "/my-requests",
  protect,
  getMySellRequests
);

// Single Request Details
router.get(
  "/:id",
  protect,
  getSellRequest
);

/*
=========================================
Admin Routes
=========================================
*/

// Get All Sell Requests
router.get(
  "/admin/all",
  protect,
  getAdminSellRequests
);

// Update Request Status
router.patch(
  "/admin/:id/status",
  protect,
  changeSellRequestStatus
);

module.exports = router;