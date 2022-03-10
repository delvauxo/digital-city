const express = require('express');
const homeRouter = require('./routes/home-router');

// Création du serveur Web
const app = express();

// Middleware applicatif
const monSuperMiddlewareQuiFaitDesLogs = (req, res, next) => {
    console.log('Nouvelle requete : ' + req.url);

    next();
};
app.use(monSuperMiddlewareQuiFaitDesLogs);

// Ajout du routing
app.use(homeRouter);

// Middleware d'erreur
const monSuperGestionnaireDErreurEnMiddleware = (err, req, res, next) => {
    console.log(err);
    res.sendStatus(500);
};
app.use(monSuperGestionnaireDErreurEnMiddleware);

// Démarrage du server
app.listen(8080, () => {
    console.log('Server up on port 8080');
});