const db = require("../config/db");

const getUsers = async (req, res) => {
try {
const [users] = await db.execute(
  `
  SELECT
    id,
    full_name,
    email,
    phone,
    role,
    is_verified,
    created_at
  FROM users
  WHERE id = ?
  `,
  [id]
);


return res.status(200).json({
  success: true,
  count: users.length,
  users,
});


} catch (error) {
console.error("Get Users Error:", error);


return res.status(500).json({
  success: false,
  message: "Server Error",
});


}
};

const getUserById = async (req, res) => {
try {
const { id } = req.params;


const [users] = await db.execute(
  
  `SELECT
    id,
    full_name,
    email,
    phone,
    role,
    is_verified,
    created_at
  FROM users
  WHERE id = ?
  ,
  [id]
`);

if (users.length === 0) {
  return res.status(404).json({
    success: false,
    message: "User not found",
  });
}

return res.status(200).json({
  success: true,
  user: users[0],
});


} catch (error) {
console.error("Get User Error:", error);


return res.status(500).json({
  success: false,
  message: "Server Error",
});


}
};

module.exports = {
getUsers,
getUserById,
};
