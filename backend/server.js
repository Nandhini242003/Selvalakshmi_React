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

/* PROFILE UPDATE */
app.put("/profile", upload.single("avatar"), (req, res) => {
  const { id, name, email, password } = req.body;
  const avatar = req.file ? req.file.filename : null;

  const sql = `
    UPDATE users SET
      name=?,
      email=?,
      password=IF(?, ?, password),
      avatar=IFNULL(?, avatar)
    WHERE id=?
  `;

  db.query(
    sql,
    [name, email, password, password, avatar, id],
    (err) => {
      if (err) return res.json({ success: false });

      res.json({
        success: true,
        user: { id, name, email, avatar },
      });
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
