const express = require("express");

const {
login,
checkUser,
getCurrentUser,
} = require(
"../controllers/authController"
);

const {
protect,
} = require(
"../middleware/authMiddleware"
);

const router = express.Router();

router.post(
"/login",
login
);
router.post("/check-user",checkUser);

router.get(
"/me",
protect,
getCurrentUser
);

module.exports = router;
