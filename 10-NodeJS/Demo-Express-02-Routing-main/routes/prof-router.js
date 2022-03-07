const express = require('express');
const path = require('path');
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

profRouter.get('/prof/redirection', (req, res) => {
    res.redirect('/prof');
});

profRouter.get('/prof/file/:filename', (req, res) => {

    const filePath = path.resolve(process.cwd(), 'data', req.params.filename);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
        else {
            console.log('File sent !');
        }
    });
});

module.exports = profRouter;