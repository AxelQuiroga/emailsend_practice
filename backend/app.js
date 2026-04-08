import express from 'express';
import cors from 'cors';
import contactController from './src/controllers/contactController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', contactController.sendEmail);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});