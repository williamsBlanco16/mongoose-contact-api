const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
  console.log('process.env.MONGODB_URI:', process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
