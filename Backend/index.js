const express = require("express");
require("dotenv").config();
const cors = require("cors");
const config = require("config");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images",express.static("uploads"));

// Debug: Check loaded configuration files
console.log("Loaded Config:", config.util.getConfigSources());

// Middleware to check JWT token
app.use((req, res, next) => {
  if (req.url.includes("login") || req.url.includes("register")) {
      return next();
  }


  const authHeader = req.headers.authorization;

  console.log("header token"+req.headers.authorization);
  if (authHeader  || authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token,  process.env.JWT_Key || "default-secret-key", (err, decoded) => {
      if (err) {
        console.log("JWT Verification Error:", err);
        return res.status(401).json({ error: "Invalid Token!" });
      }
      req.user = decoded;
      console.log("Decoded token:", decoded);
      next();
    });
    
  } else {
    res.status(401).json({ error: "Authorization header is missing or invalid" });
  }
});

//Routes
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// Start the server
app.listen(4444, () => {
  console.log(`Server started on port: 4444`);
});
