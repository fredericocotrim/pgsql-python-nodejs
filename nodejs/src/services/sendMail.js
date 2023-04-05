import nodemailer from 'nodemailer';

const handle = async arg => {
  const transporter = nodemailer.createTransport(arg.transportOptions);

  const info = await transporter.sendMail(arg.mailOptions);

  const { messageId } = info;

  return { messageId };
};

export default handle;
