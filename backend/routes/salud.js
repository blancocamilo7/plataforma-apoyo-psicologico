const express = require('express');
const router = express.Router();

router.get('/mensaje', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la plataforma de apoyo psicológico.' });
});

module.exports = router;