import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient@example.com',
      subject: `Nuevo mensaje de ${name || email}`,
      text: `De: ${name || 'Anónimo'} (${email})\n\nMensaje:\n${message}`
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};