const express = require('express');
const app = express();
const homeRouter = require('./routes/home-router');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(homeRouter);

const port = 8080;

app.listen(port, () => {
    console.log('server is up on ' + port);
});