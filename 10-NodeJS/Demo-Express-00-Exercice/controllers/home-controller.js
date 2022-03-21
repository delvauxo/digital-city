const { Request, Response } = require('express');
const products = require('../data/products.json');
const { schemaContact } = require('../validations/validator-form-contact');


const homeController = {

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    index: (req, res) => {
        res.render('home/index',);
    },

    products: (req, res) => {
        res.render('home/products', { products });
    },

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    product: (req, res) => {

        // Get product with same ID passed in url.
        const product = products.filter((product) => parseInt(req.params.id) === product.id);

        if (product.length > 0) {
            res.render('home/productDetails', { product: product[0] });
        }
        else {
            res.status(404).render('home/productNotFound', { productId: req.params.id });
        }
    },

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    gallery: (req, res) => {
        res.render('home/gallery');
    },

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    contactGet: (req, res) => {
        res.render('home/contact');
    },

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    contactPost: (req, res) => {

        schemaContact.validate(req.body, { abortEarly: false })
            .then(data => {
                console.log(data);
                res.render('home/contactResponse', { data: req.body });
            })
            .catch(err => {
                console.log(err);
                res.redirect('contact');
            });
    },

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    uploadGet: (req, res) => {
        res.render('home/upload');
    },

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    uploadPost: (req, res) => {
        res.render('home/uploadResponse');
    }


};

module.exports = homeController;