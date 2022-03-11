const express = require('express');
const app = express();
const homeRouter = require('./routes/home-router');

// Settings.
app.set('view engine', 'ejs');
app.set('views', './views');

// Parse JSON bodies for this app.
app.use(express.urlencoded({ extended: true }));

// Router.
app.use(homeRouter);

// If any routes is found, send a 404 status.
app.use((req, res) => {
    res.status(404).send('Il n\'y a rien à voir ici.');
});

// Port.
const port = 8080;

// Running server.
app.listen(port, () => {
    console.log('server is up on ' + port);
});