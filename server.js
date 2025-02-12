const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
//instance for express class
const app = express();
app.use(cors());
//to use json for request body
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
