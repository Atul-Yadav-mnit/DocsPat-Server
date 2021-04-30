const express = require('express')
const bodyParser = require('body-parser')
const Testimonials = require('../models/Testimonials')

const testimonialsRouter = express.Router();

testimonialsRouter.use(bodyParser.json());

testimonialsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Testimonials.find({})
            .then((Testimonials) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Testimonials);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        Testimonials.create(req.body)
            .then((newTestimonial) => {
                console.log('Testimonial Created ', newTestimonial);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(newTestimonial);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /Testimonials');
    })
    .delete((req, res, next) => {
        Testimonials.remove({})
            .then((Testimonials) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Testimonials);
            }, (err) => next(err))
            .catch((err) => next(err))
    });

module.exports = testimonialsRouter;