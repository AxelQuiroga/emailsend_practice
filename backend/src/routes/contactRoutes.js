import express from 'express';
import { handleContactRequest } from '../controllers/contactController.js';

const router = express.Router();

router.post('/api/contact', handleContactRequest);

export default router;