const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const integrantes = {
  integrantes: [
    { nome: "Pedro Henrique Botega" },
    { nome: "Isabel de Sá Pichini" },
   
  ]
};

app.get('/integrantes', (req, res) => {
  res.json(integrantes);
});