const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tucorreo@gmail.com',
    pass: 'tucontraseña',
  },
});

// Almacén de tokens (simulado, debes usar una base de datos en producción)
const tokenStore = {};

// Ruta para solicitar restablecimiento de contraseña
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  // Verificar si el usuario con ese correo existe en la base de datos
  // (agrega tu lógica de base de datos aquí)

  // Generar un token único
  const token = crypto.randomBytes(20).toString('hex');

  // Almacenar el token junto con el correo del usuario
  tokenStore[email] = { token, timestamp: Date.now() };

  // Configurar el correo electrónico
  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: email,
    subject: 'Restablecimiento de Contraseña',
    text: `Para restablecer tu contraseña, haz clic en el siguiente enlace: https://tudominio.com/reset-password?token=${token}`,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error al enviar el correo electrónico.');
    }
    res.status(200).send('Correo electrónico enviado. Por favor, verifica tu bandeja de entrada.');
  });
});

// Ruta para restablecer la contraseña
app.post('/reset-password', (req, res) => {
  const { email, token, newPassword } = req.body;

  // Verificar si el token es válido y no ha expirado
  const storedToken = tokenStore[email];

  if (!storedToken || storedToken.token !== token || Date.now() - storedToken.timestamp > 3600000) {
    return res.status(400).send('Token no válido o ha expirado.');
  }

  // Actualizar la contraseña en la base de datos (agrega tu lógica de base de datos aquí)

  // Eliminar el token almacenado
  delete tokenStore[email];

  res.status(200).send('Contraseña restablecida con éxito.');
});

// Puerto de escucha
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
