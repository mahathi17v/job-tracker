import React, { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const fetchJobs = () => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = () => {
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
      .then(() => {
        fetchJobs();
        setCompany("");
        setRole("");
        setStatus("");
      });
  };

  const deleteJob = (id) => {
    fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "DELETE"
    }).then(() => fetchJobs());
  };

  const updateStatus = (id, newStatus) => {
    fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: newStatus })
    }).then(() => fetchJobs());
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Job Tracker</h1>

      {/* FORM */}
      <div style={styles.form}>
        <input
          style={styles.input}
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <select
          style={styles.input}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
        </select>

        <button style={styles.addBtn} onClick={addJob}>
          Add Job
        </button>
      </div>

      {/* JOB LIST */}
      <div style={styles.grid}>
        {jobs.map((job) => (
          <div key={job.id} style={styles.card}>
            <h2>{job.company}</h2>
            <p>{job.role}</p>

            <select
              style={styles.status}
              value={job.status}
              onChange={(e) => updateStatus(job.id, e.target.value)}
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
            </select>

            <button
              style={styles.deleteBtn}
              onClick={() => deleteJob(job.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    padding: "8px",
    flex: 1,
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  addBtn: {
    padding: "8px 15px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px"
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    background: "#f9f9f9",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  status: {
    marginTop: "10px",
    padding: "5px",
    width: "100%"
  },
  deleteBtn: {
    marginTop: "10px",
    padding: "6px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;