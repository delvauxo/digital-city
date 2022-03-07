const express = require('express');
const profRouter = express.Router();

profRouter.get('/prof', (req, res) => {
    res.status(200).send('<h1>Zone prof</h1>');
});

profRouter.get('/prof/notfound', (req, res) => {
    res.status(404).send('<h1>Prof non trouvé !</h1>');
});

profRouter.get('/prof/notfoundbis', (req, res) => {
    res.sendStatus(404);
});

module.exports = profRouter;