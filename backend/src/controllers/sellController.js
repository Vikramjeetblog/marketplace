const {
  createSellRequest,
  findSellRequestById,
  getUserSellRequests,
  getAllSellRequests,
  updateSellRequestStatus,
} = require("../models/sellModel");

/*
=========================================
Generate Request Number
=========================================
*/
const generateRequestNumber = () => {
  return `RUP-SR-${Date.now()}`;
};

/*
=========================================
Create Sell Request
=========================================
*/
const submitSellRequest = async (
  req,
  res
) => {
  try {
    const {
      category_id,
      title,
      brand,
      manufacturer,
      condition_grade,
      expected_price,
      description,
    } = req.body;

    if (
      !category_id ||
      !title ||
      !condition_grade ||
      !expected_price
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill all required fields",
      });
    }

    const request_number =
      generateRequestNumber();

    const sellRequestId =
      await createSellRequest({
        request_number,
        user_id: req.user.id,
        category_id,
        title,
        brand,
        manufacturer,
        condition_grade,
        expected_price,
        description,
      });

    const sellRequest =
      await findSellRequestById(
        sellRequestId
      );

    return res.status(201).json({
      success: true,
      message:
        "Sell request submitted successfully",
      sellRequest,
    });
  } catch (error) {
    console.error(
      "Create Sell Request Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
=========================================
Get Logged In User Requests
=========================================
*/
const getMySellRequests = async (
  req,
  res
) => {
  try {
    const requests =
      await getUserSellRequests(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
=========================================
Get Sell Request Details
=========================================
*/
const getSellRequest = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const request =
      await findSellRequestById(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message:
          "Sell request not found",
      });
    }

    return res.status(200).json({
      success: true,
      request,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/*
=========================================
Admin - Get All Requests
=========================================
*/
const getAdminSellRequests =
  async (req, res) => {
    try {
      const requests =
        await getAllSellRequests();

      return res.status(200).json({
        success: true,
        requests,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

/*
=========================================
Admin - Update Status
=========================================
*/
const changeSellRequestStatus =
  async (req, res) => {
    try {
      const { id } = req.params;

      const { status } = req.body;

      const request =
        await findSellRequestById(id);

      if (!request) {
        return res.status(404).json({
          success: false,
          message:
            "Sell request not found",
        });
      }

      await updateSellRequestStatus(
        id,
        status
      );

      return res.status(200).json({
        success: true,
        message:
          "Status updated successfully",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };

module.exports = {
  submitSellRequest,
  getMySellRequests,
  getSellRequest,
  getAdminSellRequests,
  changeSellRequestStatus,
};