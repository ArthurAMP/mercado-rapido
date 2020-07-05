const routes = require("express").Router();

const userController = require('./controllers/userController');
const giftController = require('./controllers/giftController');
const brapiController = require('./controllers/brapiController');


routes.get('/cards', giftController.list);
routes.post('/cards', giftController.create);

routes.post('/users', userController.create);
routes.get('/users', userController.list);
routes.post('/users/balance', userController.balance);
routes.put('/users/balance', userController.change);


routes.post('/cep', brapiController.location);

module.exports = routes;