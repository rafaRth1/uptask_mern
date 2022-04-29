import nodemailer from 'nodemailer';

export const emailRegistro = (datos) => {
   const { email, nombre, token } = datos;

   var transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
         user: '4b9efa5d82ebd7',
         pass: '448f0bd45411f2',
      },
   });

   0:53
};
