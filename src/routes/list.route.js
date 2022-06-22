const route = require('express').Router();
const controllerList = require('../controllers/list.controller');

route.get('/allItens', controllerList.findAllItensofListController);
route.get('/itemOfList/:id', controllerList.findByIdItemOfListController);
route.post('/create', controllerList.createItemOfListController);
route.put('/update/:id', controllerList.updateitemOfListController);
route.delete('/delete/:id', controllerList.deleteitemOfListController);

module.exports = route;
