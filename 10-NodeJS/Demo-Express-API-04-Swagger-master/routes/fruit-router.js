const fruitController = require('../controllers/fruit-controller');


const fruitRouter = require('express').Router();

fruitRouter.get('/fruit', fruitController.getAll);
fruitRouter.post('/fruit', fruitController.insert);

fruitRouter.get('/fruit/:id', fruitController.getOne);
fruitRouter.put('/fruit/:id', fruitController.update);
fruitRouter.delete('/fruit/:id', fruitController.delete);

module.exports = fruitRouter;