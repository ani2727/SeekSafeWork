const express = require("express");
const mongoose = require("mongoose");
const app = express();
const appRoute = require("./routes/authRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); // Load environment variables

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
const dbURI = "mongodb+srv://ramu:ramu@cluster3.vwbuu.mongodb.net/major";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(4000, () => console.log("Server running on port 4000"))
  )
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use(appRoute);
