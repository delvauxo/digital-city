// const studentRouter = require('express').Router();

const express = require('express');
const studentRouter = express.Router();

// Définition de route sur l'objet "router"
studentRouter.get('/student', (req, res) => {

    res.send('<h1>Zone student</h1>');
});

studentRouter.get('/student/:studentId([0-9]+)', (req, res) => {

    res.send(`<h1>Info du student ${req.params.studentId}</h1>`);
});

// Définition de route avec plusieurs réaction en fonction du verbs html
studentRouter.route('/student/formulaire')
    .get((req, res) => {
        res.send(`<h1>Zone d\'info des student</h1>
            <form method='POST'>
                <input type='text' name='studentName' />
                <button type='submit'>Envoyer</button>
            </form>        
        `);
    })
    .post((req, res) => {
        res.send('<h1>Merci de vous avoir contacté</h1>');
    });


// Exportation du module router
module.exports = studentRouter;