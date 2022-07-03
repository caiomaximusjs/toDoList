const mongoose = require('mongoose');

const databaseConnection = () => {
  mongoose
    .connect('mongodb://localhost:27017/itens-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDB connected'))
    .catch((error) =>
      console.log(`Erro ao conectar com o mongoDB, erro: ${error}`)
    );
};

module.exports = databaseConnection
