// Importing express to use routing
const express = require("express");
const router = express.Router();

//Get workshops when get to /api/workshops
const workshopsController = require("../controllers/workshopsController");

//Action to do when get is executed on /api/workshops
router.get("/", workshopsController.getWorkshops);

module.exports = router;
