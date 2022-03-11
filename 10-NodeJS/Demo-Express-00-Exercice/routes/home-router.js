const express = require('express');
const homeController = require('../controllers/home-controller');

// Create the router.
const homeRouter = express.Router();

// Home page.
homeRouter.get('/', homeController.index);
// Aliases home pages redirected to '/'.
homeRouter.get(['/index', '/home'], (req, res) => {
    res.redirect('/');
});

// Products page.
homeRouter.get('/products', homeController.products);
// Detailed product page.
homeRouter.get('/products/:id', homeController.product);

// Gallery page.
homeRouter.get('/gallery', homeController.gallery);

// Contact page.
homeRouter.route('/contact')
    .get(homeController.contactGet)
    .post(homeController.contactPost);

// Upload page.
homeRouter.route('/upload')
    .get(homeController.uploadGet)
    .post(homeController.uploadPost);

// Export module.
module.exports = homeRouter;