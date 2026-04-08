import express from 'express';
import contactController from '../controllers/contactController.js';

const router = express.Router();

router.post('/api/contact', contactController.sendEmail);

export default router;