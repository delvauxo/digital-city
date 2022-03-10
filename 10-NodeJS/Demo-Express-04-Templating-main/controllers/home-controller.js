const express = require('express');


// Création de l'objet homeController avec des méthodes.
const homeController = {

    /**
     * Méthode du controller pour l'index.
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.render('home/index');
    },

    about: (req, res) => {
        const author = {
            firstname: 'Olivier',
            lastname: 'Delvaux'
        };
        res.render('about/index', { author });
    },

    contactGet: (req, res) => {
        const category = ['frontend', 'backend', 'database'];
        res.render('contact/index', { category });
    },

    contactPost: (req, res) => {
        res.render('contact/response', { name });
    }
};

// Exportation du homeController.
module.exports = homeController;