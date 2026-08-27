const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

// Environment variables load karna
dotenv.config();

const app = express();
app.use(express.json());

// Database connect karna
connectDB();

// Test Route
app.get('/', (req, res) => {
  res.send('VS Code & Railway API Backend is fully functional!');
});

// API Routes ko use karna
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
