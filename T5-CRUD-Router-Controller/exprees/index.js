import express from 'express';
import route from './routes/studentsRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/students', route);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
