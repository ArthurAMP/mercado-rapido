const routes = require("express").Router();

const userController = require('./controllers/userController');
const giftController = require('./controllers/giftController');
<<<<<<< HEAD
const brapiController = require('./controllers/brapiController');

=======
const productController = require('./controllers/productController');
>>>>>>> create search engine

routes.get('/cards', giftController.list);
routes.post('/cards', giftController.create);
routes.delete('/cards', giftController.delete);


routes.post('/users', userController.create);
routes.get('/users', userController.list);
routes.post('/users/balance', userController.balance);
routes.put('/users/balance', userController.change);


<<<<<<< HEAD
routes.post('/cep', brapiController.location);
=======
routes.post('/products', productController.search)
>>>>>>> create search engine

module.exports = routes;