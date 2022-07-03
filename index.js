const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/list.route');
const app = express();
const databaseConnection = require('./src/database/database')
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/myList', routes);
databaseConnection();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
