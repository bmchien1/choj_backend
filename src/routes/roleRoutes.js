const express = require("express");
const router = express.Router();
const roleController = require("../controllers/RoleController");

// Define the routes for roles
router.post("/", roleController.createRole);
router.get("/", roleController.getRoles);

module.exports = router;
