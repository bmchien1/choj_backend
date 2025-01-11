const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/AssignmentController");

// Define the routes for assignments
router.post("/", assignmentController.createAssignment);
router.get("/", assignmentController.getAssignments);
router.get("/:id", assignmentController.getAssignmentById);
router.put("/:id", assignmentController.updateAssignment);
router.delete("/:id", assignmentController.deleteAssignment);

module.exports = router;
