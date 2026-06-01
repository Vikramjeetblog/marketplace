const jwt = require("jsonwebtoken");

const {
findUserByPhone,
createUser,
findUserById,
} = require("../models/userModel");
const checkUser = async (req, res) => {
try {
const { phone } = req.body;


if (!phone) {
  return res.status(400).json({
    success: false,
    message: "Phone number is required",
  });
}

const user = await findUserByPhone(phone);

return res.status(200).json({
  success: true,
  exists: !!user,
  user: user
    ? {
        full_name: user.full_name,
        email: user.email,
      }
    : null,
});


} catch (error) {
console.error(error);


return res.status(500).json({
  success: false,
  message: "Server Error",
});


}
};

const login = async (req, res) => {
try {
const {
phone,
full_name,
email,
otp,
} = req.body;


if (!phone || !otp) {
  return res.status(400).json({
    success: false,
    message: "Phone and OTP are required",
  });
}

// Demo OTP
if (otp !== "123456") {
  return res.status(400).json({
    success: false,
    message: "Invalid OTP",
  });
}

let user = await findUserByPhone(phone);

// New User
if (!user) {
  if (!full_name || !email) {
    return res.status(400).json({
      success: false,
      message:
        "Full name and email are required for new users",
    });
  }

  const userId = await createUser({
    full_name,
    phone,
    email,
  });

  user = await findUserById(userId);
}
console.log(
  "JWT_SECRET:",
  process.env.JWT_SECRET
);
const token = jwt.sign(
  {
    id: user.id,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "30d",
  }
);

return res.status(200).json({
  success: true,
  message: "Login successful",
  token,
  user,
});


} catch (error) {
console.error("Auth Error:", error);


return res.status(500).json({
  success: false,
  message: "Server Error",
});

}
};

const getCurrentUser = async (
req,
res
) => {
try {
const user = await findUserById(
req.user.id
);


return res.status(200).json({
  success: true,
  user,
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
checkUser,
login,
getCurrentUser,
};
