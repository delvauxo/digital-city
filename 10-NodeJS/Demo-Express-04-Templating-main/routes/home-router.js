const express = require('express');
const homeController = require('../controllers/home-controller');

// Création du router pour la zone home.
// Celui-ci est dédié au routing.
// Son objectif est d'envoyer vers la bonne methode.
const homeRouter = express.Router();

// Page home.
homeRouter.get('/', homeController.index);
homeRouter.get(['/index', '/home'], (req, res) => res.redirect('/'));
// Page about.
homeRouter.get('/about', homeController.about);
// Page contact.
homeRouter.route('/contact')
    .get(homeController.contactGet)
    .post(homeController.contactPost);

// On exporte le tout.
module.exports = homeRouter;