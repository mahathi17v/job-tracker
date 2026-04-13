// const express = require("express");
// const router = express.Router();

// const { addJob } = require("../controllers/jobController");

// router.post("/jobs", addJob);

// module.exports = router;

const express = require("express");
const router = express.Router();

// const { addJob, getJobs } = require("../controllers/jobController");

// // Add new job
// router.post("/jobs", addJob);

// // Get all jobs
// router.get("/jobs", getJobs);


// const { addJob, getJobs, updateJobStatus } = require("../controllers/jobController");

// router.post("/jobs", addJob);
// router.get("/jobs", getJobs);
// router.put("/jobs/:id", updateJobStatus);

const { addJob, getJobs, updateJobStatus, deleteJob } = require("../controllers/jobController");

router.post("/jobs", addJob);
router.get("/jobs", getJobs);
router.put("/jobs/:id", updateJobStatus);
router.delete("/jobs/:id", deleteJob);

module.exports = router;