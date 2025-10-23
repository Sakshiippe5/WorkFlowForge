const express = require('express');
const app = express();
const port = 5000; // We'll use port 5000 for backend
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


app.use(express.json()); // Allows JSON data in requests

// A simple test endpoint
app.get('/', (req, res) => {
  res.send('Hello from WorkFlowForge Backend!');
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});

// Example endpoint to get users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});