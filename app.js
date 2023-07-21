const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Create a new SQLite database connection
const db = new sqlite3.Database(
  "./database.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error("Error connecting to the database:", err.message);
    } else {
      console.log("Connected to the SQLite database.");
      // Create a 'users' table if it doesn't exist
      db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userName TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      )
    `);
    }
  }
);

// Create a new user
app.post("/users", (req, res) => {
  const { userName, email, password } = req.body;
  const insertQuery = `INSERT INTO users (userName, email, password) VALUES (?, ?, ?)`;
  db.run(insertQuery, [userName, email, password], (err) => {
    if (err) {
      console.error("Error creating user:", err.message);
      res.status(500).json({ error: "Error creating user." });
    } else {
      console.log("User created successfully.");
      res.status(201).json({ message: "User created successfully." });
    }
  });
});

// Read all users
app.get("/users", (req, res) => {
  const selectQuery = `SELECT * FROM users`;
  db.all(selectQuery, (err, users) => {
    if (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).json({ error: "Error fetching users." });
    } else {
      res.json(users);
    }
  });
});

// Update a user by ID
app.put("/users/:id", (req, res) => {
  const { userName, email, password } = req.body;
  const userId = req.params.id;
  const updateQuery = `UPDATE users SET userName = ?, email = ?, password = ? WHERE id = ?`;
  db.run(updateQuery, [userName, email, password, userId], (err) => {
    if (err) {
      console.error("Error updating user:", err.message);
      res.status(500).json({ error: "Error updating user." });
    } else {
      console.log("User updated successfully.");
      res.json({ message: "User updated successfully." });
    }
  });
});

// Delete a user by ID
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const deleteQuery = `DELETE FROM users WHERE id = ?`;
  db.run(deleteQuery, [userId], (err) => {
    if (err) {
      console.error("Error deleting user:", err.message);
      res.status(500).json({ error: "Error deleting user." });
    } else {
      console.log("User deleted successfully.");
      res.json({ message: "User deleted successfully." });
    }
  });
});

// Login route
// app.post("/users/login", (req, res) => {
//   const { userName, password } = req.body;
//   const selectQuery = `SELECT * FROM users WHERE userName = ? AND password = ?`;

//   db.get(selectQuery, [userName, password], (err, user) => {
//     if (err) {
//       console.error("Error executing query:", err.message);
//       res.status(500).json({ error: "Error executing query." });
//     } else {
//       if (user) {
//         // User found, credentials are correct
//         console.log("User logged in successfully.");
//         console.log("User details:", user);
//         res.status(200).json({ message: "User logged in successfully." });
//       } else {
//         // User not found or credentials are incorrect
//         console.log("Invalid credentials. Login failed.");
//         res.status(401).json({ error: "Invalid credentials. Login failed." });
//       }
//     }
//   });
// });
//post method for login
app.post("/users/login", (req, res) => {
  const { userName, password } = req.body;
  const selectQuery = `SELECT userName, email FROM users WHERE userName = ? AND password = ?`;

  db.get(selectQuery, [userName, password], (err, user) => {
    if (err) {
      console.error("Error executing query:", err.message);
      res.status(500).json({ error: "Error executing query." });
    } else {
      if (user) {
        // User found, credentials are correct
        const token = jwt.sign(
          { userName: user.userName, email: user.email },
          "itissoprivatekeyandshouldnotsharewithanyone",
          { expiresIn: "1h" }
        );
        // User found, credentials are correct
        console.log("User logged in successfully.");
        console.log("User details:", userName); // Log the user details to verify
        res.status(200).json({ userName, token });
        // res.status(200).json(user); // Return user details (userName and email)
      } else {
        // User not found or credentials are incorrect
        console.log("Invalid credentials. Login failed.");
        res.status(401).json({ error: "Invalid credentials. Login failed." });
      }
    }
  });
});

// Start the server
app.use(express.static("angular-routing"));
app.listen(process.env.port || port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
