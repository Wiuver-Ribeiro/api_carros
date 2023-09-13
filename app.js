const express = require('express');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rotas para carros
app.use('/cars', carRoutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
