const express = require('express')
const bodyParser = require('body-parser')
const Testimonials = require('../models/Testimonials')
const mongoose = require('mongoose')
const cors = require('../cors');

const testimonialsRouter = express.Router();

testimonialsRouter.use(bodyParser.json());

testimonialsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); 
    res.setHeader('Content-Type', 'text/plain');})
    .get(cors.cors,(req, res, next) => {

        Testimonials.find(req.query)
            .then((testimonials) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(testimonials);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        Testimonials.create(req.body)
            .then((newtestinomial) => {
                console.log('Testinomial Created ', newtestinomial);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(newtestinomial);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /testimonials');
    })
    .delete((req, res, next) => {
        Testimonials.remove({})
            .then((testimonials) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(testimonials);
            }, (err) => next(err))
            .catch((err) => next(err))
    });

module.exports = testimonialsRouter;