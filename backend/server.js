/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";
import mysql from "mysql2";
import multer from "multer";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* DB */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "samplereact",
});

/* MULTER */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

/* LOGIN */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) return res.json({ success: false });

      if (result.length > 0) {
        const user = result[0];
        res.json({
          success: true,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
          },
        });
      } else {
        res.json({ success: false, message: "Invalid credentials" });
      }
    }
  );
});

/* GET PROFILE - Fetch user data from database */
app.get("/profile/:id", (req, res) => {
  const userId = req.params.id;

  db.query(
    "SELECT id, name, email, phone, role, address, bio, avatar FROM users WHERE id=?",
    [userId],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.json({ success: false, message: "Database error" });
      }

      if (result.length > 0) {
        res.json({
          success: true,
          user: result[0],
        });
      } else {
        res.json({ success: false, message: "User not found" });
      }
    }
  );
});

/* PROFILE UPDATE - Update all fields including address and bio */
app.put("/profile", upload.single("avatar"), (req, res) => {
  const { id, name, email, phone, role, address, bio, password } = req.body;
  const avatar = req.file ? req.file.filename : null;

  // Build dynamic update query
  let updateFields = [];
  let values = [];

  if (name) {
    updateFields.push("name=?");
    values.push(name);
  }
  if (email) {
    updateFields.push("email=?");
    values.push(email);
  }
  if (phone !== undefined) {
    updateFields.push("phone=?");
    values.push(phone);
  }
  if (role) {
    updateFields.push("role=?");
    values.push(role);
  }
  if (address !== undefined) {
    updateFields.push("address=?");
    values.push(address);
  }
  if (bio !== undefined) {
    updateFields.push("bio=?");
    values.push(bio);
  }
  if (password && password.trim() !== "") {
    updateFields.push("password=?");
    values.push(password);
  }
  if (avatar) {
    updateFields.push("avatar=?");
    values.push(avatar);
  }

  if (updateFields.length === 0) {
    return res.json({ success: false, message: "No fields to update" });
  }

  values.push(id);
  const sql = `UPDATE users SET ${updateFields.join(", ")} WHERE id=?`;

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      
      // Handle duplicate email
      if (err.code === "ER_DUP_ENTRY") {
        return res.json({ success: false, message: "Email already exists" });
      }
      
      return res.json({ success: false, message: "Update failed" });
    }

    if (result.affectedRows === 0) {
      return res.json({ success: false, message: "User not found" });
    }

    // Fetch updated user data to return
    db.query(
      "SELECT id, name, email, phone, role, address, bio, avatar FROM users WHERE id=?",
      [id],
      (err, result) => {
        if (err) {
          return res.json({ 
            success: true, 
            message: "Updated but couldn't fetch new data",
            user: { id, name, email, avatar }
          });
        }

        res.json({
          success: true,
          message: "Profile updated successfully",
          user: result[0],
        });
      }
    );
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});