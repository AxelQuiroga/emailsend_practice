import Contact from '../models/Contact.js';
import { sendEmail } from './emailService.js';

export const createContact = async (data) => {
  const contact = new Contact(data);
  await contact.save();
  await sendEmail(data);
  return contact;
};
