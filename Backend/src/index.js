const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

const PORT = process.env.PORT || 5000;

// Sample API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
