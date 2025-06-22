import express from 'express';
import route from './routes/studentsRoutes.js';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGO_URL;

mongoose.connect(url).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
}); 


const app = express();

app.use(express.json());
app.use('/api/students', route);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
