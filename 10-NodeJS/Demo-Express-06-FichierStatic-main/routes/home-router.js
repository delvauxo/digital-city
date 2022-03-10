const homeController = require('../controllers/home-controller');

const homeRouter = require('express').Router();

// Ajout de multer pour gérer les formulaires "multipart/form-data"
const multer = require('multer');
// - Configuration du middleware
const upload = multer({ dest: 'storage' });

homeRouter.get('/', homeController.index);
homeRouter.get('/contact', homeController.contact);

// Injection du middlware de multer
homeRouter.post('/contact', upload.single('myFile'), homeController.contactPost);

module.exports = homeRouter;