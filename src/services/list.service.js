const toDoList = [
  {
    id: 1,
    name: 'Sweep the house',
    frequency: 'all days',
    level: 'easy',
  },
  {
    id: 2,
    name: 'wash the dog',
    frequency: '2 weeks',
    level: 'hard',
  },
  {
    id: 3,
    name: 'study javascript',
    frequency: 'all days',
    level: 'medium',
  },
];

const findAllItensofListService = () => {
  return toDoList;
};
const findByIdItemOfListService = (itemId) => {
  return toDoList.find((item) => item.id === itemId);
};
const createItemService = (newItem) => {
  const newId = toDoList.length + 1;
  newItem.id = newId;
  toDoList.push(newItem);
  return newItem;
};
const updateItemService = (id, updatedItem) => {
  updatedItem['id'] = id;
  const itemIndex = toDoList.findIndex((item) => item.id == id);
  toDoList[itemIndex] = updatedItem;
  return updatedItem;
};
const deleteItemService = (id) => {
  const itemIndex = toDoList.findIndex((item) => item.id == id);
  return toDoList.splice(itemIndex, 1);
};

module.exports = {
  findAllItensofListService,
  findByIdItemOfListService,
  createItemService,
  updateItemService,
  deleteItemService,
};
