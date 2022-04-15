const fruitModel = require('../models/fruit');

const fruitController = {

    /**
     * GET /fruit
     * @summary List of fruits
     * @tags Fruit
     * @return {array<Fruit>} 200 - Fruits - application/json
     */
    getAll: (req, res) => {
        const fruits = fruitModel.getAll();
        res.status(200).json(fruits);
    },

    /**
     * GET /fruit/{id}
     * @summary Get fruit by Id
     * @tags Fruit
     * @param {number} id.path - Id of fruit
     * @return {Fruit} 200 - A Fruit - application/json
     * @return 404 - Not found
     */
    getOne: (req, res) => {
        const targetId = parseInt(req.params.id);
        const fruit = fruitModel.getById(targetId);

        if(!fruit) {
            res.sendStatus(404);
        } 
        res.status(200).json(fruit);
    },

    /**
     * POST /fruit
     * @summary Create a new fruit
     * @tags Fruit
     * @param {DataFruit} request.body.required - Fruit data - application/json
     * @return {Fruit} 200 - A new fruit - application/json
     */
    insert: (req, res) => {
        if (!req.body.name) {
            return res.sendStatus(422);
        }

        const data = {
            name: req.body.name
        };

        const newFruit = fruitModel.create(data);

        res.json(newFruit);
    },

    /**
     * PUT /fruit/{id}
     * @summary Update a fruit
     * @tags Fruit
     * @param {number} id.path - Id of fruit
     * @param {DataFruit} request.body.required - Fruit data - application/json
     * @return {Fruit} 501 - Not implemented
     */
    update: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * DELETE /fruit/{id}
     * @summary Update a fruit
     * @tags Fruit
     * @param {number} id.path - Id of fruit
     * @return 204 - Success response
     * @return 404 - Not found
     */
    delete: (req, res) => {
        const targetId = parseInt(req.params.id);

        const isOk = fruitModel.delete(targetId);

        if (isOk) {
            return res.sendStatus(204);
        }
        res.sendStatus(404);
    }
};

module.exports = fruitController;