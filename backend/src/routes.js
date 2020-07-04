const routes = require("express").Router();

const giftController = require('./controllers/giftController');

routes.get('/cards', giftController.list);
routes.post('/cards', giftController.create);

module.exports = routes;