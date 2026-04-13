// exports.addJob = (req, res) => {
//   const { company, role, status } = req.body;

//   console.log(company, role, status);

//   res.json({
//     message: "Job added successfully",
//     data: { company, role, status }
//   });
// };

const db = require("../config/db");

exports.addJob = (req, res) => {
  const { company, role, status } = req.body;

  const query = "INSERT INTO jobs (company, role, status) VALUES (?, ?, ?)";

  db.query(query, [company, role, status], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({
      message: "Job saved to database",
      jobId: result.insertId
    });
  });
};

// exports.getJobs = (req, res) => {
//   const query = "SELECT * FROM jobs ORDER BY created_at DESC";

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Database error" });
//     }

//     res.json(results);
//   });
// };

exports.getJobs = (req, res) => {
  const { status } = req.query;

  let query = "SELECT * FROM jobs";
  let values = [];

  if (status) {
    query += " WHERE status = ?";
    values.push(status);
  }

  query += " ORDER BY created_at DESC";

  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(results);
  });
};

exports.updateJobStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const query = "UPDATE jobs SET status = ? WHERE id = ?";

  db.query(query, [status, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Job status updated" });
  });
};

exports.deleteJob = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM jobs WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Job deleted successfully" });
  });
};