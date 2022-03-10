const express = require('express');
const chalk = require('chalk');
const path = require('path');
const homeRouter = require('./routes/home-router');
const logger = require('./middlewares/logger-middleware');

// Variable de config
const port = 8080;
const rootDir = process.cwd();

// Créer le serveur Web
const app = express();

// Configurer le moteur de vue
// - Express va utiliser le moteur de vue automatiquement
app.set('view engine', 'ejs');
// - Configuration du répertoire dans lequel sont le vues
app.set('views', path.resolve(rootDir, 'views'));

// Ajout d'un middleware
app.use(logger());

// Ajout d'un middleware pour gérer les requetes "x-www-form-urlencoded"
// NB : Anciennement, il etait necessaire d'installer« body-parser »
app.use(express.urlencoded({ extended: true }));
// ↑ Ceci ajout l'objet 'body' dans l'objet 'req'

// Ajout des routers
app.use(homeRouter);

// Demarrage du serveur
app.listen(port, () => {
    console.log(chalk.magenta(`Server up on port ${port}`));
});