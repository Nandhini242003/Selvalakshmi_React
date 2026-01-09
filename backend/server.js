/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";
import mysql from "mysql2";


const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection - LOCAL LARAGON SETTINGS
const db = mysql.createConnection({
  host: "localhost",      // Laragon-ல localhost தான்
  user: "root",           // Laragon default user
  password: "",           // Laragon-ல password இல்ல (empty string)
  database: "samplereact", // உங்க database name
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected Successfully!");
  }
});

// Test route
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend is running! 🚀",
    timestamp: new Date().toLocaleString()
  });
});

// Test database connection
app.get("/test-db", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
        error: err.message,
      });
    }
    res.json({
      success: true,
      message: "Database connected!",
      users: result,
    });
  });
});

// LOGIN API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email); // Debug

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log("Query error:", err);
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (result.length > 0) {
      console.log("✅ Login successful:", email);
      return res.json({
        success: true,
        user: {
          id: result[0].id,
          name: result[0].name,
          email: result[0].email,
        },
      });
    } else {
      console.log("❌ Invalid credentials:", email);
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }
  });
});

// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT id, name, email FROM users", (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }
    res.json({
      success: true,
      count: result.length,
      users: result,
    });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`
  ====================================
  🚀 Server running on port ${PORT}
  📍 http://localhost:${PORT}
  🗄️  Database: sampletask_react
  ====================================
  `);
});
// UPDATE PROFILE
app.put("/profile", (req, res) => {
  const { id, name, email, password } = req.body;

  let sql;
  let values;

  if (password && password !== "") {
    sql = "UPDATE users SET name=?, email=?, password=? WHERE id=?";
    values = [name, email, password, id];
  } else {
    sql = "UPDATE users SET name=?, email=? WHERE id=?";
    values = [name, email, id];
  }

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("❌ Update error:", err);
      return res.json({
        success: false,
      });
    }

    res.json({
      success: true,
      message: "Profile updated",
    });
  });
});
