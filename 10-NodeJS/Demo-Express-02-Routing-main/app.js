const express = require('express');
const studentRouter = require('./routes/student-router');


// Création de l'app 'server'
const app = express();

// Ajout du systeme de routage
app.get('/', (req, res) => {
    // ↑ Route sur le '/'

    // Envoi d'un réponse au client
    res.status(200).send("<h1>Hello World</h1>");
});

app.get('/products?demo', (req, res) => {
    // ↑ Le caractere 's' de product est optionnel

    res.status(200).send("<h1>Route 'Product(s)Demo'</h1>");
});

app.get(['/jerome', '/morgane'], (req, res) => {
    // ↑ Ensemble de routes possible (Exemple pratique: / et /home )

    res.status(200).send("<h1>Route 'jerome' ou 'morgane'</h1>");
});

app.get('/personnage/:firstname/:lastname', (req, res) => {
    // ↑ Route avec parametres => Ceux-ci sont injecté dans un objet 'param'
    console.log(req.params);

    // ↓ Extration des parametres via le destructuring
    const { firstname, lastname } = req.params;
    res.send(`<h1>Bonjour ${firstname} ${lastname}</h1>`);
});

app.get('/product/:id([0-9]+)/detail', (req, res) => {

    // ↓ Récuperation de donnée en format "string"
    //   Necessite un parse pour le manipuler au format "number"
    const id = parseInt(req.params.id);
    res.send(`<h1>Detail du produit ${id}</h1>`);
});

// Ajout du systeme de routage via l'objet Router!
app.use(studentRouter);

// Démarrage du serveur sur le port 8080
app.listen(8080, () => {
    console.log('Server up on port 8080');
});