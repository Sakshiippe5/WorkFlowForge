const express = require('express');
const app = express();
const port = 5000; // We'll use port 5000 for backend

app.use(express.json()); // Allows JSON data in requests

// A simple test endpoint
app.get('/', (req, res) => {
  res.send('Hello from WorkFlowForge Backend!');
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});