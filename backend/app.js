import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleContactRequest } from './src/controllers/contactController.js';
import connectDB from './src/config/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', handleContactRequest);

connectDB();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});