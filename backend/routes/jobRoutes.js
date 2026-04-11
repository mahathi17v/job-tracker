// const express = require("express");
// const router = express.Router();

// const { addJob } = require("../controllers/jobController");

// router.post("/jobs", addJob);

// module.exports = router;

const express = require("express");
const router = express.Router();

const { addJob, getJobs } = require("../controllers/jobController");

// Add new job
router.post("/jobs", addJob);

// Get all jobs
router.get("/jobs", getJobs);

module.exports = router;