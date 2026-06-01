const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes)

/* API Health Check */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Rupantar API is running",
  });
});

/* Database Health Check */
app.get("/api/health", async (req, res) => {
  try {
    const connection = await db.getConnection();

    await connection.query("SELECT 1");

    connection.release();

    res.status(200).json({
      success: true,
      database: "connected",
      message: "Database connection successful",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      database: "disconnected",
      message: "Database connection failed",
      error: error.message,
    });
  }
});

module.exports = app;