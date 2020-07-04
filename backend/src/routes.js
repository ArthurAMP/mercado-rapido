const routes = require("express").Router();

const userController = require('./controllers/userController');
const giftController = require('./controllers/giftController');

routes.get('/cards', giftController.list);
routes.post('/cards', giftController.create);

routes.post('/users', userController.create);
routes.get('/users', userController.list);


module.exports = routes;