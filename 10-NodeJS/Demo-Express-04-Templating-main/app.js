const chalk = require('chalk');
const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home-router');

const port = 8080;
const rootDir = process.cwd();

// Créer le serveur Web.
const app = express();

// Configurer le moteur de vue.
app.set('view engine', 'ejs');
app.set('views', path.resolve(rootDir, 'views'));

// Ajout des routers.
app.use(homeRouter);

app.listen(port, () => {
    console.log(chalk.magenta(`Server up on port ${port}`));
});