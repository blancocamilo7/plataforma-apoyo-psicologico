const express = require('express');
const cors = require('cors');
const saludRoutes = require('./routes/salud');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/salud', saludRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});