const express = require('express');
const request = require('request');
const app = express();

// Defina a rota para o proxy
app.get('/proxy', (req, res) => {
  const url = req.query.url;  // Obtenha o URL da query string
  if (!url) {
    return res.status(400).send('URL is required');
  }

  request({ url }).pipe(res);  // Faz a requisição para o URL e devolve a resposta
});

const port = 3001;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
