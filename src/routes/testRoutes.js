const express = require("express");
const router = express.Router();
const testController = require("../controllers/TestController");

// Define the routes for tests
router.post("/", testController.createTest);
router.get("/", testController.getTests);
router.get("/:id", testController.getTestById);
router.put("/:id", testController.updateTest);
router.delete("/:id", testController.deleteTest);

module.exports = router;
