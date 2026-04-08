import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'lokuraa18@hotmail.com',
      subject: `Nuevo mensaje de ${name || email}`,
      text: `De: ${name || 'Anónimo'} (${email})\n\nMensaje:\n${message}`
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};