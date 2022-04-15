const express = require('express');
const fruitRouter = require('./routes/fruit-router');

// Création du serveur
const app = express();

// Ajout de Swagger
const expressJSDocSwagger = require('express-jsdoc-swagger');
const swaggerSpec = require('./swagger/swagger-spec');
expressJSDocSwagger(app)(swaggerSpec);

// Configuration du serveur
// - Middlewares
app.use(express.json());
// - Utilisation des routes
app.use(fruitRouter);

// Demarrage du serveur
app.listen(8080, () => {
    console.log('Server API up on port 8080');
});