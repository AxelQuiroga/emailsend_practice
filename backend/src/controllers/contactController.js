import { createContact } from '../services/contactService.js';

export const handleContactRequest = async (req, res) => {
    const { name, email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        await createContact({ name, email, message });
        res.json({ message: "Consulta enviada y guardada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al procesar la consulta' });
    }
};