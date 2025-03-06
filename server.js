const express = require("express");
const mongoose = require("./database");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
require("./auth"); // OAuth configuration

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 
app.use(express.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/comments", require("./routes/comments"));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
