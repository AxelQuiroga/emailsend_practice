import { sendEmail } from '../services/emailService.js';

export const sendEmail = async (req, res) => {

    const { name, email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    try {

        await sendEmail(req, res);
        res.json({ message: "Consulta enviada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email' });
    }
};