import React, { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  // Fetch jobs
  const fetchJobs = () => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Add job
  const addJob = () => {
    // ✅ Validation
    if (!company || !role || !status) {
      alert("Please fill all fields");
      return;
    }

    fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ company, role, status })
    })
      .then((res) => res.json())
      .then(() => {
        fetchJobs(); // refresh list
        setCompany("");
        setRole("");
        setStatus("");
      })
      .catch((err) => console.error(err));
  };

  // Delete job
  const deleteJob = (id) => {
    fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "DELETE"
    })
      .then(() => fetchJobs())
      .catch((err) => console.error(err));
  };

  // Update status
  const updateStatus = (id, newStatus) => {
    fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: newStatus })
    })
      .then(() => fetchJobs())
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Tracker</h1>

      {/* FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          <option value="">Select Status</option>
          <option value="applied">applied</option>
          <option value="interview">interview</option>
          <option value="rejected">rejected</option>
        </select>

        <button onClick={addJob}>Add Job</button>
      </div>

      {/* JOB LIST */}
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>{job.company}</h3>
            <p><b>Role:</b> {job.role}</p>

            <select
              value={job.status}
              onChange={(e) => updateStatus(job.id, e.target.value)}
            >
              <option value="applied">applied</option>
              <option value="interview">interview</option>
              <option value="rejected">rejected</option>
            </select>

            <br /><br />

            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
export default App;