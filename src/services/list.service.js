const Itens = require('../models/Item');

const findAllItensofListService = async () => {
  const itens = await Itens.find();
  return itens;
};
const findByIdItemOfListService = async (itemId) => {
  const item = await Itens.findById(itemId);
  return item;
};
const createItemService = async (newItem) => {
  const createdItem = await Itens.create(newItem);
  return createdItem;
};
const updateItemService = async (id, updatedItem) => {
  const itemUpdate = await Itens.findByIdAndUpdate(id, updatedItem)
  return itemUpdate
};
const deleteItemService = async (id) => {
return await Itens.findByIdAndDelete(id);
};

module.exports = {
  findAllItensofListService,
  findByIdItemOfListService,
  createItemService,
  updateItemService,
  deleteItemService,
};
