const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  frequency: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    require: true,
  },
});


const Item = mongoose.model('itens', itemSchema);

module.exports = Item
