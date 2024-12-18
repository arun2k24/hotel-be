const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const menuRoutes = require('./routes/menuRoutes');
const reservationRoutes = require('./routes/reservationRoutes'); // Create reservationRoutes
const contactRoutes = require('./routes/contactRoutes'); // Create contactRoutes

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Add middleware for parsing JSON in request bodies

// Database connection
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE;

mongoose.connect(connectionString).then((res)=>{
console.log("Mongo DB connected Successfully")
})
.catch((err)=>{
console.log("MongoDB connection failed");
console.log(err)
})

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes); // Use reservationRoutes instead of directly passing the model
app.use('/api/contact', contactRoutes); // Use contactRoutes instead of directly passing the model

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
