const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const courseRoutes = require("./routes/courseRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const testRoutes = require("./routes/testRoutes");
const appealRoutes = require("./routes/appealRoutes");
const sequelize = require("./config/dbConfig");

// Load biến môi trường từ .env
dotenv.config();

const app = express();

// Sử dụng middleware để phân tích dữ liệu JSON
app.use(express.json());

// Sử dụng route cho user
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/appeals", appealRoutes);
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
