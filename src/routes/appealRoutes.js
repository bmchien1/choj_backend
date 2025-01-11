const express = require("express");
const router = express.Router();
const appealController = require("../controllers/AppealController");

// Define the routes for appeals
router.post("/", appealController.createAppeal);
router.get("/", appealController.getAppeals);
router.get("/:id", appealController.getAppealById);
router.put("/:id", appealController.updateAppeal);
router.delete("/:id", appealController.deleteAppeal);

module.exports = router;
