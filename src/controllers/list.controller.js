const listService = require('../services/list.service');
const mongoose = require('mongoose');

const findAllItensofListController = async (req, res) => {
  const item = await listService.findAllItensofListService();
  res.send(item);
  if (item == 0) {
    res.status(404).send('Dont exist itens in list');
  }
};

const findByIdItemOfListController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send('Task dont exist');
  }
  const choicedItem = await listService.findByIdItemOfListService(idParam);

  if (choicedItem == undefined) {
    res.status(404).send('Task not found');
  }
  res.send(choicedItem);
};

const createItemOfListController = async (req, res) => {
  const item = req.body;
  if (!item || !item.name || !item.frequency || !item.level) {
    return res.status(404).send({ message: 'Your item is incomplete' });
  }
  const newItem = await listService.createItemService(item);
  res.send(newItem);
};

const updateitemOfListController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send('Task dont exist');
  }
  const editItem = req.body;
  if (!editItem || !editItem.name || !editItem.frequency || !editItem.level) {
    return res.status(404).send({ message: 'Your item is incomplete' });
  }
  const updatedItem = await listService.updateItemService(idParam, editItem);
  res.send(updatedItem);
};

const deleteitemOfListController = async (req, res) => {
  const idParam = +req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send('Task dont exist');
  }
  await listService.deleteItemService(idParam);
  res.send({ message: 'Task deleted' });
};

module.exports = {
  findAllItensofListController,
  findByIdItemOfListController,
  createItemOfListController,
  updateitemOfListController,
  deleteitemOfListController,
};
