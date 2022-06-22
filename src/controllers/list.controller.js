const listService = require('../services/list.service');

const findAllItensofListController = (req, res) => {
  const item = listService.findAllItensofListService();
  res.send(item);
};

const findByIdItemOfListController = (req, res) => {
  const itemId = +req.params.id;
  const choicedItem = listService.findByIdItemOfListService(itemId);
  res.send(choicedItem);
};

const createItemOfListController = (req, res) => {
  const item = req.body;
  const newItem = listService.createItemService(item);
  res.send(newItem);
};

const updateitemOfListController = (req, res) => {
  const idParam = +req.params.id;
  const editItem = req.body;
  const updatedItem = listService.updateItemService(idParam, editItem);
  res.send(updatedItem);
};

const deleteitemOfListController = (req, res) => {
  const idParam = req.params.id;
  listService.deleteItemService(idParam);
  res.send({ message: 'Task deleted' });
};

module.exports = {
  findAllItensofListController,
  findByIdItemOfListController,
  createItemOfListController,
  updateitemOfListController,
  deleteitemOfListController,
};
