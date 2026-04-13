# 🚀 Job Tracker — Full Stack Application

A modern full-stack job tracking application that helps users manage job applications efficiently. Built with a clean UI and real-time updates, the app allows users to track, update, and manage their job search seamlessly.

---

## 🚀 Features

### 🧩 Job Management
➕ Add new job applications  
📋 View all jobs in a structured layout  
✏️ Update job status (Applied, Interview, Rejected)  
❌ Delete jobs instantly  
🔄 Auto-refresh UI after every action  

---

### 🔍 Smart Filtering
📍 Filter jobs by status using API  
⚡ Dynamic query handling in backend  
🔄 Real-time updates  

---

### 🎨 UI & Experience
🎯 Clean and responsive UI using Tailwind CSS  
📦 Card-based job layout  
⚡ Smooth user interactions  
🧭 Simple and intuitive design  

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|------------|------------------------|
| Frontend   | React, Tailwind CSS    |
| Backend    | Node.js, Express       |
| Database   | MySQL                  |
| API        | RESTful APIs           |

---

## 📂 Project Structure

```
job-tracker/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── jobController.js
│   ├── routes/
│   │   └── jobRoutes.js
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   └── App.js
│
└── README.md
```

---

## ⚙️ How It Works

### 🔹 Backend Flow
- REST APIs handle CRUD operations  
- MySQL stores job data  
- Controllers manage business logic  
- Routes define API endpoints  

---

### 🔹 Frontend Flow
- React fetches data from backend  
- Displays jobs dynamically  
- Handles form input and user actions  
- Updates UI instantly after operations  

---

### 🔹 Full Flow

```
User → React UI → Node API → MySQL → API → React UI
```

---

## 🧪 How to Run Locally

### Backend

```bash
cd backend
node server.js
```

---

### Frontend

```bash
cd frontend
npm start
```

---

Then open:

```
http://localhost:3000
```

---

## 🎮 Usage Guide

| Action | How To |
|------|-------|
| ➕ Add Job | Fill form and click "Add Job" |
| 📋 View Jobs | Automatically displayed |
| ✏️ Update Status | Use dropdown in job card |
| ❌ Delete Job | Click delete button |

---

## ✨ Highlights

✔ Full-stack application (React + Node + MySQL)  
✔ Complete CRUD functionality  
✔ Real-time UI updates  
✔ Clean and responsive UI  
✔ Industry-standard architecture  

---

## 🎯 Future Enhancements

🔐 User authentication (login/signup)  
🔍 Search and filter in UI  
🌐 Deploy application online  
📊 Dashboard analytics (applications per week)  

---

<!-- ## 📸 Screenshots -->

<!-- (Add your screenshots here) -->
