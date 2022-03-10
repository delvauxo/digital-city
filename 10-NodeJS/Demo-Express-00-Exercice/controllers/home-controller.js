const { Request, Response } = require('express');
const products = require('../data/products.json');

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
        res.render('home/contactResponse');
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