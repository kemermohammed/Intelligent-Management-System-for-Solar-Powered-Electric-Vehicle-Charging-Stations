const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
  
  const mongoURI = "mongodb+srv://kemmah5833:EYbBzEqhRAT4QAko@cluster0.frksmgt.mongodb.net/";
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to database');
  } catch (err) {
    console.log('Error connecting to MongoDB:', err);
  }
};

module.exports = { connectToDatabase };
