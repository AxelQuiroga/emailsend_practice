import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleContactRequest } from './src/controllers/contactController.js';
import connectDB from './src/config/db.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', handleContactRequest);

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});