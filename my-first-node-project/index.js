const express = require("express");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello Node.js 👋");
});

app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Beginner",
    role: "Node.js learner"
  });
});

app.post("/api/user", (req, res) => {
  const user = req.body;

  res.json({
    message: "User received",
    user
  });
});


// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
