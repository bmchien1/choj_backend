const express = require("express");
const { createUser, getUserById } = require("../controllers/userController");

const router = express.Router();

// Tạo người dùng mới
router.post("/", createUser);

// Lấy thông tin người dùng theo ID
router.get("/:id", getUserById);

module.exports = router;
