const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/dbConfig");

// Load biến môi trường từ .env
dotenv.config();

const app = express();

// Sử dụng middleware để phân tích dữ liệu JSON
app.use(express.json());

// Sử dụng route cho user
app.use("/api/users", userRoutes);

// Khởi động server và kết nối đến PostgreSQL
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
